export const useMessageLog = () => {
  const log = useState('log', () => []);
  return {log};
};
