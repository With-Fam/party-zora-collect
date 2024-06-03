import {
  Address,
  encodeAbiParameters,
  encodeFunctionData,
  encodePacked,
  parseAbiParameters,
  parseEther,
} from 'viem';
import { zoraCreator1155ImplABI } from '@zoralabs/protocol-deployments';
import { AbiCoder } from 'ethers';

const getZoraPurchaseProposalBytecode = () => {
  const collectionAddress = '0x78aef8d0bdba272f34d86bf6b8ba96aa54584932' as Address;
  const price = 0n;
  const zoraFee = parseEther('0.000777');
  const value = price + zoraFee;
  const minter = '0xd34872BE0cdb6b09d45FCa067B07f04a1A9aE1aE' as Address;
  const tokenId = 2n;
  const quantity = 1n;
  const recipient = '0xb5acded340d66678f01097818940a0f028dafb8d' as Address;
  const minterArguments = encodeAbiParameters(parseAbiParameters('address x, string y'), [
    recipient,
    'HELLO WORLD',
  ]);
  const mintReferral = recipient;
  const data = encodeFunctionData({
    abi: zoraCreator1155ImplABI,
    functionName: 'mintWithRewards',
    args: [minter, tokenId, quantity, minterArguments, mintReferral],
  });

  const abiCoder = AbiCoder.defaultAbiCoder();

  const encodedBytecodeProposalData = abiCoder.encode(
    [
      'tuple(address payable target,uint256 value,bytes data,bool optional,bytes32 expectedResultHash)[]',
    ],
    [
      [
        {
          target: collectionAddress,
          value,
          data,
          optional: false,
          expectedResultHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
        },
      ],
    ],
  );

  return encodedBytecodeProposalData;
};

export default getZoraPurchaseProposalBytecode;
