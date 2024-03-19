import { toast } from 'react-toastify';
import axios from 'axios';

export async function uploadImage(event) {
  let toastId = null;

  const image = await getImage(event);

  if (!image) {
    return null;
  }

  const formData = new FormData();
  formData.append('image', image, image.name);

  try {
    const response = await axios.post('api/upload', formData, {
      onUploadProgress: ({ progress }) => {
        if (toastId) {
          toast.update(toastId, { progress });
        } else {
          toastId = toast.success('Uploading...', { progress });
        }
      },
    });

    toast.dismiss(toastId);
    return response.data.imageUrl;
  } catch (error) {
    console.error('Error uploading image:', error);
    toast.error('Error uploading image');
    return null;
  }
}

async function getImage(event) {
  const files = event.target.files;

  if (!files || files.length <= 0) {
    toast.warning('Upload file is not selected!', 'File Upload');
    return null;
  }

  const file = files[0];

  if (file.type !== 'image/jpeg') {
    toast.error('Only JPG type is allowed', 'File Type Error');
    return null;
  }

  return file;
}
