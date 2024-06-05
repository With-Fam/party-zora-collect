import { useProvider } from '@/providers/Provider';
import GenerateButton from '../GenerateButton';
import MadeBySweets from '../MadeBySweets';
import Output from '../Output';
import LandingPageHeader from './LandingPageHeader';
import Input from '../Input';

const LandingPageContent = () => {
  const {
    proposalData,
    fundsRecipient,
    setFundsRecipient,
    saleStrategy,
    setSaleStrategy,
    collectionAddress,
    setCollectionAddress,
  } = useProvider();

  return (
    <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center sm:gap-8 md:px-6">
      <LandingPageHeader />
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
      {proposalData && (
        <div>
          <div>proposalData</div>
          <Output text={JSON.stringify(proposalData)} />
        </div>
      )}

      <GenerateButton />
      <MadeBySweets />
    </div>
  );
};

export default LandingPageContent;
