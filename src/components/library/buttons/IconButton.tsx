import React from 'react';
import { motion } from "framer-motion";
import { Bookmark } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import styles from './IconButton.module.css';

interface Props {
  /**
   * Callback function that is called when the button is clicked.
   */
  onClick: () => void;
   /**
   * The name of the icon to display in the button.
   * values are: 'bookmark', 'heart', 'thumbsup'
   */
  icon: string;
  /**
   * Whether the button is enabled or not.Use true, false or enable.
   */
  enabled: boolean;
  fill: string;
  color: string;
}
/**
 * A button with an icon.
 */
const IconButton: React.FC<Props> = ({ onClick, icon,enabled, fill, color }) => {
  return (
    
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={styles.iconButton} 
      onClick={onClick}
    >
      {icon === 'bookmark' && <Bookmark color={color} fill={fill} />}
      {icon === 'heart' && <Heart color={color} fill={fill} />}
      {icon === 'thumbsup' && <ThumbsUp color={color} fill={fill} />}
    </motion.button>
  );
};

export default IconButton;
