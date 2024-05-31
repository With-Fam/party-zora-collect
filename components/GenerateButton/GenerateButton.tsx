import Button from '../Button';
import { useProvider } from '@/providers/Provider';
import getSetupActions from '@/lib/zora/getSetupActions';

const GenerateButton = () => {
  const { setSetupActions, fundsRecipient, saleStrategy } = useProvider();
  const isDisabled = !fundsRecipient || !saleStrategy;

  const handleClick = () => {
    const proposal = { maxExecutableTime: '0', cancelDelay: '0', proposalData: '0' };
    const latestSnapIndex = 1n;
    console.log('SWEETS SHOW PARAMS FOR PROPOSAL');
    console.log('SWEETS proposal', proposal);
    console.log('SWEETS latestSnapIndex', latestSnapIndex);
    // const setupActions = getSetupActions({
    //   fundsRecipient,
    //   fixedPriceSaleStrategy: saleStrategy,
    // });
    // setSetupActions(setupActions);
  };

  return (
    <Button
      // disabled={isDisabled}
      onClick={handleClick}
      className="bg-black px-12 py-4 rounded-3xl"
      di
    >
      Generate
    </Button>
  );
};

export default GenerateButton;
