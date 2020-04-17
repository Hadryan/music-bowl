import Link from 'next/link'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SettingsIcon from '@material-ui/icons/Settings'

export default function MedButton(props) {
  const { icon, subheading, color, link } = props

  const swirlBackground = color === 'blue'
    ? '/images/blue-swirl.png'
    : '/images/purp-swirl.png'

  const iconTable = {
    upload: <AddCircleOutlineIcon/>,
    search: <SearchIcon/>,
    account: <AccountCircleIcon/>,
    settings: <SettingsIcon/>
  }
  return (
    <>
      <Link href={link}>
        <div className="swirl-button med-swirl-button" type="submit">
          {
            iconTable[icon]
          }
        </div>
      </Link>
      <style jsx>
        {`
        svg.MuiSvgIcon-root {
          font-size: 7rem !important;
        }
        .med-swirl-button {
          background-image: url('${swirlBackground}');
        }
        .med-swirl-button:after {
          content: ${subheading}
        }
        `}
      </style>
    </>
  )

}
