import Ionicons from "react-native-vector-icons/Ionicons";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

const Icon = ({ name, size, color }: IconProps) => {
  return (
    <Ionicons name={name} size={size} color={color} />
  )
}

export default Icon;