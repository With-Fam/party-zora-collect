import { AbiCoder } from 'ethers';
import { BytecodeProposalData } from '../types/partyTypes';

const getTransferProposalBytecode = (inputProposalData: BytecodeProposalData) => {
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

  return encodedBytecodeProposalData;
};

export default getTransferProposalBytecode;
