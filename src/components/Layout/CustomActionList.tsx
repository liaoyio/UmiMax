import {
  GithubFilled,
  InfoCircleFilled,
  QuestionCircleFilled,
} from '@ant-design/icons';
import { SelectLang } from '@umijs/max';

type Props = {
  isMobile?: boolean;
};

export default (props: Props) => {
  if (props.isMobile) return [];
  if (typeof window === 'undefined') return [];
  return [
    <SelectLang style={{ padding: 4 }} key="SelectLang" />,
    <InfoCircleFilled key="InfoCircleFilled" />,
    <QuestionCircleFilled key="QuestionCircleFilled" />,
    <GithubFilled key="GithubFilled" />,
  ];
};
