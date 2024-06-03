import { useProvider } from '@/providers/Provider';
import GenerateButton from '../GenerateButton';
import MadeBySweets from '../MadeBySweets';
import Output from '../Output';
import LandingPageHeader from './LandingPageHeader';

const LandingPageContent = () => {
  const { proposalData } = useProvider();

  return (
    <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center sm:gap-8 md:px-6">
      <LandingPageHeader />
      {proposalData && (
        <div>
          <div>cancelDelay</div>
          <Output text={proposalData.cancelDelay} />
          <div>maxExecutableTime</div>
          <Output text={proposalData.maxExecutableTime} />
          <div>proposalData</div>
          <Output text={proposalData.proposalData} />
        </div>
      )}

      <GenerateButton />
      <MadeBySweets />
    </div>
  );
};

export default LandingPageContent;
