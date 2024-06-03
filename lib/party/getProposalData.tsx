import getMaxExecutableTime from '@/lib/party/getMaxExecutableTime';
import { pad, toHex, concatHex, Address, parseEther } from 'viem';
import { ProposalType } from '@/lib/types/partyTypes';
import getTransferProposalBytecode from './getTransferProposalBytecode';
import getZoraPurchaseProposalBytecode from './getZoraPurchaseProposalBytecode';

const getProposalData = () => {
  const encodedBytecodeProposalData = getZoraPurchaseProposalBytecode();
  const hexEncodedSelector = pad(toHex(ProposalType.ArbitraryCalls), {
    size: 4,
  });
  const proposalData = concatHex([hexEncodedSelector, encodedBytecodeProposalData as Address]);
  const proposalStruct: any = {
    cancelDelay: '0',
    maxExecutableTime: getMaxExecutableTime(),
    proposalData,
  };

  return proposalStruct;
};

export default getProposalData;
