import Button from '../Button';

const GenerateButton = () => {
  const handleClick = () => {
    const proposal = { maxExecutableTime: '0', cancelDelay: '0', proposalData: '0' };
    const latestSnapIndex = 1n;
    console.log('SWEETS SHOW PARAMS FOR PROPOSAL');
    console.log('SWEETS proposal', proposal);
    console.log('SWEETS latestSnapIndex', latestSnapIndex);
  };

  return (
    <Button onClick={handleClick} className="bg-black px-12 py-4 rounded-3xl" di>
      Generate
    </Button>
  );
};

export default GenerateButton;
