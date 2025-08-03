import React, { useState, useEffect } from "react";
import "./FullScreenMenu.css";
import { Link } from "react-router-dom";
import {
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const FullScreenMenu = ({ isOpen, toggleMenu }) => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggleMenu = () => {
  //     setIsOpen(!isOpen);
  //   };
  const [open, setOpen] = useState(true);
  const menuItems = [
    { text: "Home", link: "/" },
    { text: "Learn", link: "/learn" },
    {
      text: "About",
      submenu: [
        { text: "Company", link: "/about" },
        { text: "Team", link: "/team" },
      ],
    },
    {
      text: "Services",
      submenu: [
        { text: "Data Solutions", link: "/services/data" },
        { text: "Cloud Solutions", link: "/services/cloud" },
        { text: "Security & Privacy", link: "/services/security-and-privacy" },
        {
          text: "Artificial Intelligence",
          link: "/services/artificial-intelligence",
        },
        {
          text: "Governance & Compliance",
          link: "/services/governance-and-compliance",
        },
        { text: "Planning & Execution", link: "/services/planning-and-execution" },
        {
          text: "Development & Integration",
          link: "/services/development-and-integration",
        },
        { text: "Service Operations", link: "/services/service-operations" },
      ],
    },
    { text: "Insight Hub", 
      submenu: [
        { text: "Blogs", link: "/blogs" },
        { text: "Articles", link: "/articles" },
        { text: "news", link: "/news" },
        { text: "case-studies", link: "/case-studies" },
    ],
      // link: "/insight-hub" 
    },
    { text: "Get In Touch", link: "/contact" },
  ];

  const [expandedMenu, setExpandedMenu] = useState(null);

  useEffect(() => {
    // Close the menu when it's toggled off
    if (!isOpen) {
      setExpandedMenu(null);
    }
  }, [isOpen]);

  const handleMenuClick = (index) => {
    setExpandedMenu(index === expandedMenu ? null : index);
  };

  return (
    <div
      className={`fullscreen-menu ${isOpen ? "open" : ""}`}
      style={{
        transition: "transform 1s ease-in-out", // Add transition property
        transform: isOpen ? "translateX(0)" : "translateX(-100%)", // Slide from left
      }}
    >
      <div className="container">
        <List
          component="nav"
          sx={{
            overflow: "auto",
            maxHeight: "calc(100vh - 80px)",
          }}
        >
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItemButton onClick={() => handleMenuClick(index)}>
                {item.link ? (
                  <Link
                  onClick={toggleMenu}
                    to={item.link}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <ListItemText
                      primaryTypographyProps={{ fontSize: 25 }}
                      primary={item.text}
                    />
                  </Link>
                ) : (
                  <ListItemText
                    primaryTypographyProps={{ fontSize: 25 }}
                    primary={item.text}
                  />
                )}
                {item.submenu &&
                  (expandedMenu === index ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
              {item.submenu && (
                <Collapse
                  in={expandedMenu === index}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.submenu.map((subItem, subIndex) => (
                      <React.Fragment key={subIndex}>
                        <Link
                        onClick={toggleMenu}
                          to={subItem.link}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText
                              primaryTypographyProps={{ fontSize: 25 }}
                              primary={subItem.text}
                            />
                          </ListItemButton>
                        </Link>
                        {subIndex !== item.submenu.length - 1 && (
                          <Divider component="li" />
                        )}
                      </React.Fragment>
                    ))}
                  </List>
                </Collapse>
              )}
              {index !== menuItems.length - 1 && <Divider component="li" />}
            </React.Fragment>
          ))}
        </List>
      </div>
    </div>
  );
};

export default FullScreenMenu;
