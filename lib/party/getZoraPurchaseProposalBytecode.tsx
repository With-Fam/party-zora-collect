import {
  Address,
  encodeAbiParameters,
  encodeFunctionData,
  parseAbiParameters,
  parseEther,
} from 'viem';
import { zoraCreator1155ImplABI } from '@zoralabs/protocol-deployments';
import getProposalBytecode from './getProposalBytecode';

const getZoraPurchaseProposalBytecode = () => {
  const collectionAddress = '0xab00c2fbfb2cb909f64ba5808ed8c5078e8f1a32' as Address;
  const price = 0n;
  const zoraFee = parseEther('0.000777');
  const value = price + zoraFee;
  const minter = '0x04E2516A2c207E84a1839755675dfd8eF6302F0a' as Address;
  const tokenId = 1n;
  const quantity = 1n;
  const recipient = '0x4273e913cb67fcc350065d850f942352b74c18a8' as Address;
  const minterArguments = encodeAbiParameters(parseAbiParameters('address x, string y'), [
    recipient,
    'Based in Colombia 🇨🇴',
  ]);
  const mintReferral = recipient;
  const data = encodeFunctionData({
    abi: zoraCreator1155ImplABI,
    functionName: 'mintWithRewards',
    args: [minter, tokenId, quantity, minterArguments, mintReferral],
  });
  const encodedBytecodeProposalData = getProposalBytecode(collectionAddress, value, data);
  return encodedBytecodeProposalData;
};

export default getZoraPurchaseProposalBytecode;
