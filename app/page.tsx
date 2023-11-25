const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
recordCollection



export default function Home() {

  console.log(recordCollection[2548].artist)





  function updateRecords(records, id, prop, value) {
    if(value === ''){
    delete records[id][prop]
  }
  else if(prop !== 'tracks' && value !== ''){
      records[id][prop] = value 
     console.log(value)
  }
  else if(prop === 'tracks' && value !== ''){
    if(records[id].hasOwnProperty('tracks')){
      records[id][prop].push(value)
    }
     else if(records[id].hasOwnProperty('tracks') === false){
     records[id][prop] = [value]
    }
  }
    return records;
  }

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.log(recordCollection)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-400">
      <div></div>
    </main>
  )
}
