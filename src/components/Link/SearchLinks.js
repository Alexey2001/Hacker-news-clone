import React from "react";
import { FirebaseContext } from "../../firebase";
import LinkItem from "./LinkItem";

function SearchLinks() {
  const {firebase} = React.useContext(FirebaseContext)
  const [filterLinks, setFilterLinks] = React.useState([])
  const [links, setLinks] = React.useState([])
  const [filter, setFilter] = React.useState("")

  React.useEffect(() => {
    getInitialLinks()
  }, [])

  function getInitialLinks() {
    firebase.db.collection('links').get().then(snapshot => {
      const links = snapshot.docs.map(doc => {
        return { id: doc.id, ...doc.data()}
      })
      setLinks(links)
    })
  }

  function handleSearch(event) {
    event.preventDefault();
    const query = filter.toLowerCase()
    const matchedLinks = links.filter(link => {
      return ( link.description.toLowerCase().includes(query) || 
      link.url.toLowerCase().includes(query) || 
      link.postedBy.name.toLowerCase().includes(query)
      )
    })
    setFilterLinks(matchedLinks)
  }

  return (
    <div>

    <form onSubmit={handleSearch}>
    <div>
      Search <input onChange={event => setFilter(event.target.value)}/>
      <button>Ok</button>
    </div>
    </form>
    {filterLinks.map((filteredLink, index) => (
      <LinkItem key={filteredLink.id} 
      showCount={false}
      link={filteredLink}
      index={index}
      />
    ))}
    </div>
    )
}

export default SearchLinks;
