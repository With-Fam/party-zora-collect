import Input from '../Input';
import { useProvider } from '@/providers/Provider';

const InputGroup = () => {
  const {
    fundsRecipient,
    setFundsRecipient,
    saleStrategy,
    setSaleStrategy,
    collectionAddress,
    setCollectionAddress,
  } = useProvider();

  return (
    <div className="flex flex-col gap-5">
      <Input
        placeholder="collectionAddress"
        value={collectionAddress}
        onChange={(e: any) => setCollectionAddress(e.target.value)}
      />
      <Input
        placeholder="minter"
        value={saleStrategy}
        onChange={(e: any) => setSaleStrategy(e.target.value)}
      />
      <Input
        placeholder="recipient"
        value={fundsRecipient}
        onChange={(e: any) => setFundsRecipient(e.target.value)}
      />
    </div>
  );
};

export default InputGroup;
