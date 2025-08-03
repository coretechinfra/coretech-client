import React, { useEffect } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const Page = ({ children, title, description, keywords, structuredData }) => {
  const location = useLocation();

  useEffect(() => {
    // Send page view to GTAG
    if (window.gtag) {
      window.gtag("config", "G-FGMLMWXVV8", {
        page_path: location.pathname,
      });
    }
  }, [location.pathname]);

  return (
    <div style={{
      overflow: 'hidden',
      width: '100vw',
    }}>
      <HelmetProvider>
        <Helmet>
          {/* SEO Meta Tags */}
          <title>{title || "Default Title"}</title>
          <meta
            name="description"
            content={description || "Default Description"}
          />
          <meta name="keywords" content={keywords || "Default, Keywords"} />
          <meta name="author" content="Shoora Technologies" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          {/* Open Graph Meta Tags */}
          <meta property="og:title" content={title || "Default Title"} />
          <meta
            property="og:description"
            content={description || "Default Description"}
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={window.location.href} />

          {/* JSON-LD Structured Data */}
          {structuredData && (
            <script type="application/ld+json">
              {JSON.stringify(structuredData)}
            </script>
          )}
        </Helmet>
        {children}
      </HelmetProvider>
    </div>
  );
};

export default Page;
