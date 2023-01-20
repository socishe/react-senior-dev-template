import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface Props {
  to: string;
}

const Redirect: React.FC<Props> = ({ to }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname !== to) {
      navigate(to);
    }
  }, [navigate, to, location]);

  return null;
}

export default Redirect;
