import { GITHUB_REPO } from '@/lib/consts';

const MadeBySweets = () => (
  <a href={GITHUB_REPO} target="_blank" className="flex justify-center items-center gap-5">
    made with <img src="/images/zorb.png" width="50" /> by fam
  </a>
);

export default MadeBySweets;
