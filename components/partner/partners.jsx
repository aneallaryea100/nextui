"use client"

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

function Partners() {
  const { data: session } = useSession();
  const [partner, setPartner] = useState(null);
  console.log('session', session);

  useEffect(() => {
    const fetchPartner = async () => {
      try {
        const response = await fetch("https://spes.pscgh.com:442/pp_test/api/Partner/1", {
          method: "GET",
          headers: {
            authorization: `bearer ${session?.user.accessToken}`,
          }
        });

        if (!response.ok) {
          throw new Error("Failed to fetch partner data");
        }

        const partnerResponse = await response.json();
        setPartner(partnerResponse);
      } catch (error) {
        console.error(error.message);
        // Handle error state or display an error message
      }
    };

    if (session?.user) {
      fetchPartner();
    }
  }, [session]);

  if (session?.user) {
    return (
      <div className="containerPartner">
        <h1>Partners table</h1>
        {partner ? (
          <table>
            <thead>
              <tr>
                <th>Query</th>
                <th>Page</th>
                <th>Size</th>
                <th>Status</th>
                <th>Order By</th>
                <th>From</th>
                <th>To</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{partner.query}</td>
                <td>{partner.page}</td>
                <td>{partner.size}</td>
                <td>{partner.status}</td>
                <td>{partner.orderBy}</td>
                <td>{partner.from}</td>
                <td>{partner.to}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  } else {
    return <h1>Please sign in</h1>;
  }
}

export default Partners;
