import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');

export const getFileUrl = (record, filename) => {
  if (!record || !filename) return '';
  return pb.files.getURL(record, filename);
};
