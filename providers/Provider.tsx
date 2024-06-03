import { createContext, useContext, useMemo, useState } from 'react';

const Context = createContext<any>(null);

const Provider = ({ children }: any) => {
  const [proposalData, setProposalData] = useState<any>();
  const [copied, setCopied] = useState<boolean>(false);
  const [fundsRecipient, setFundsRecipient] = useState<`0x${string}`>();
  const [saleStrategy, setSaleStrategy] = useState<`0x${string}`>();

  const value = useMemo(
    () => ({
      copied,
      setCopied,
      fundsRecipient,
      setFundsRecipient,
      saleStrategy,
      setSaleStrategy,
      proposalData,
      setProposalData,
    }),
    [
      copied,
      setCopied,
      fundsRecipient,
      setFundsRecipient,
      saleStrategy,
      setSaleStrategy,
      proposalData,
      setProposalData,
    ],
  );

  return <Context.Provider value={value as any}>{children}</Context.Provider>;
};

export const useProvider = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useProvider must be used within a Provider');
  }
  return context;
};

export default Provider;
