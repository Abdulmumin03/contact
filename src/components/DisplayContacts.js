import React from 'react';

const fs = require('fs');

function DisplayContacts (props){
    const {contactList} = props;

    function displayNoDuplicate() {
        const uniquePhone = Object.values(contactList.reduce((r,c) => { 
            r[c.phone] = c 
            return r
          }, {}))
          const contactLists = uniquePhone.length ? (
              uniquePhone.map(contact => {
                return (
                  <div key={contact.id}>
                    <div>
                      {contact.phone}
                    </div>
                  </div>
                )
              })
            ) : (<div></div>)
            //let data = JSON.stringify(contactLists);
            //fs.writeFileSync('contact.json', data);  
          return (<div>{contactLists}</div>);
    }

    function writeNewData() {
        
    }

    return(
        <div>
            <div>
                {
                    contactList.map(contact => (
                        <div key={contact.id}>
                            <div>
                                <p>
                                    {contact.phone}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <h5>After Removal Of Duplicates</h5>
            {displayNoDuplicate()}
        </div>
    );
}

export default DisplayContacts;