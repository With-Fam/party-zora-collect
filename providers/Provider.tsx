import { createContext, useContext, useMemo, useState } from 'react';

const Context = createContext<any>(null);

const Provider = ({ children }: any) => {
  const [proposalData, setProposalData] = useState<any>();
  const [fundsRecipient, setFundsRecipient] = useState<`0x${string}`>();
  const [saleStrategy, setSaleStrategy] = useState<`0x${string}`>();
  const [collectionAddress, setCollectionAddress] = useState<`0x${string}`>();

  const value = useMemo(
    () => ({
      fundsRecipient,
      setFundsRecipient,
      collectionAddress,
      setCollectionAddress,
      saleStrategy,
      setSaleStrategy,
      proposalData,
      setProposalData,
    }),
    [
      fundsRecipient,
      setFundsRecipient,
      collectionAddress,
      setCollectionAddress,
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
