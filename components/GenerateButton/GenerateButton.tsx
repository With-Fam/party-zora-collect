import getProposalData from '@/lib/party/getProposalData';
import Button from '../Button';
import { useProvider } from '@/providers/Provider';

const GenerateButton = () => {
  const { collectionAddress, saleStrategy, fundsRecipient, setProposalData } = useProvider();

  const handleClick = () => {
    console.log('SWEETS GENERATE FOR', collectionAddress, saleStrategy, fundsRecipient);
    const response = getProposalData(collectionAddress, saleStrategy, fundsRecipient);
    setProposalData(response);
  };

  return (
    <Button onClick={handleClick} className="bg-black px-12 py-4 rounded-3xl" di>
      Generate
    </Button>
  );
};

export default GenerateButton;
