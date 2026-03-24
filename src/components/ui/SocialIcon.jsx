import { Github, Linkedin } from 'lucide-react'
import { MediumIcon, ThreadsIcon, DOUIcon } from './icons'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  medium: MediumIcon,
  threads: ThreadsIcon,
  dou: DOUIcon,
}

const SocialIcon = ({ name, size = 18 }) => {
  const Icon = iconMap[name]
  return Icon ? <Icon size={size} /> : null
}

export default SocialIcon
