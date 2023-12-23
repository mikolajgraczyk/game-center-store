import DefaultIcon from '@icons/DefaultIcon.svg';
import WindowsIcon from '@icons/WindowsIcon.svg';
import MacIcon from '@icons/MacIcon.svg';
import Loader from '@icons/Loader.svg';
import FacebookLogo from '@icons/FacebookLogo.svg';
import GoogleLogo from '@icons/GoogleLogo.svg';
import Logo from '@icons/GameCenterLogo.svg';
import Star from '@icons/Star.svg';

interface IconProps {
  name: string;
}

const iconComponents: Record<string, React.FC<IconProps>> = {
  default: DefaultIcon,
  windows: WindowsIcon,
  mac: MacIcon,
  loader: Loader,
  facebook: FacebookLogo,
  google: GoogleLogo,
  logo: Logo,
  star: Star,
};
function Icon(props: IconProps) {
  const { name } = props;
  const IconComponent = iconComponents[name] || DefaultIcon;

  return <IconComponent {...props} />;
}

export default Icon;
