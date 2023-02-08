import React from 'react';
import { Bookmark } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import styles from './IconButton.module.css';

interface Props {
  onClick: () => void;
  icon: string;
  enabled: boolean;
  fill: string;
  color: string;
}

const IconButton: React.FC<Props> = ({ onClick, icon,enabled, fill, color }) => {
  return (
    <button className={styles.iconButton} onClick={onClick}>
      {icon === 'bookmark' && <Bookmark color={color} fill={fill} />}
      {icon === 'heart' && <Heart color={color} fill={fill} />}
      {icon === 'thumbsup' && <ThumbsUp color={color} fill={fill} />}
    </button>
  );
};

export default IconButton;
