import { useProvider } from '@/providers/Provider';
import GenerateButton from '../GenerateButton';
import MadeBySweets from '../MadeBySweets';
import Output from '../Output';
import LandingPageHeader from './LandingPageHeader';
import InputGroup from '../InputGroup';

const LandingPageContent = () => {
  const { proposalData } = useProvider();

  return (
    <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center sm:gap-8 md:px-6">
      <LandingPageHeader />
      <InputGroup />
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
