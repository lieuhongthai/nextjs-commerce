// ** MUI Imports
import { Mode, Settings } from '@/@core/types/mui/type'
import themeConfig from '@/configs/themeConfig'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from '@/@core/components/icon'

// ** Types Import
interface Props {
  settings: Settings
}
const ModeToggler = (props: Props) => {
  // ** Props
  const { settings } = props

  const { mode } = settings
  const handleModeChange = (mode: Mode) => {}

  const handleModeToggle = () => {
    if (mode === 'light') {
      handleModeChange('dark' as Mode)
    } else {
      handleModeChange('light' as Mode)
    }
  }

  return (
    <IconButton color='inherit' aria-haspopup='true' onClick={handleModeToggle}>
      <Icon icon={mode === 'dark' ? 'mdi:weather-sunny' : 'mdi:weather-night'} />
    </IconButton>
  )
}

export default ModeToggler
