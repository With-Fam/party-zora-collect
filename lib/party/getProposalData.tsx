import getMaxExecutableTime from '@/lib/party/getMaxExecutableTime';
import { AbiCoder } from 'ethers';
import { pad, toHex, concatHex, Address } from 'viem';
import { BytecodeProposalData, ProposalType } from '@/lib/types/partyTypes';

const getProposalData = (inputProposalData: BytecodeProposalData) => {
  const abiCoder = AbiCoder.defaultAbiCoder();
  const encodedBytecodeProposalData = abiCoder.encode(
    [
      'tuple(address payable target,uint256 value,bytes data,bool optional,bytes32 expectedResultHash)[]',
    ],
    [
      [
        {
          target: inputProposalData.target,
          value: inputProposalData.value,
          data: '0x',
          optional: false,
          expectedResultHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
        },
      ],
    ],
  );
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
