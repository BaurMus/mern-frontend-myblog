export const formatTime = (value) => {
  const result = value.slice(0, 10) + " " + value.slice(11, 19);
  return result; 
}