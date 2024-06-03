import getProposalData from '@/lib/party/getProposalData';
import Button from '../Button';
import { Address, parseEther } from 'viem';
import { useProvider } from '@/providers/Provider';

const GenerateButton = () => {
  const { setProposalData } = useProvider();
  const target = '0xb5acDED340D66678f01097818940A0F028DAFB8d' as Address;
  const value = '0.0001111';
  const handleClick = () => {
    const proposalRaw = {
      target: target,
      value: parseEther(value),
      data: '0x0',
      optional: false,
      expectedResultHash: '0x0',
    };
    const response = getProposalData(proposalRaw);
    setProposalData(response);
  };

  return (
    <Button onClick={handleClick} className="bg-black px-12 py-4 rounded-3xl" di>
      Generate
    </Button>
  );
};

export default GenerateButton;
