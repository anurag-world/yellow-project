import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const NavItems = () => {
  return (
    <div className="navbar">
      <div className="nav-items">
        <button>
          <span>Why yellow.ai?</span> <ExpandMoreIcon />
        </button>
      </div>
      <div className="nav-items">
        <button>
          <span>Platform</span>
          <ExpandMoreIcon />
        </button>
      </div>

      <div className="nav-items">
        <button>
          <span>Solutions</span>
          <ExpandMoreIcon />
        </button>
      </div>

      <div className="nav-items">
        <button>
          <span>Resources</span>
          <ExpandMoreIcon />
        </button>
      </div>

      <div className="nav-items">
        <button>
          <span>Company</span>
          <ExpandMoreIcon />
        </button>
      </div>
    </div>
  )
}

export default NavItems
