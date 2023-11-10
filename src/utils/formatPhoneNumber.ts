export const formatPhoneNumber = (phone: string) => {
  let correctFormat = '+xx (xx) xxxxx-xxxx';
  phone.split('').forEach(e => {
    correctFormat = correctFormat.replace('x', e);
  });
  return correctFormat;
};
