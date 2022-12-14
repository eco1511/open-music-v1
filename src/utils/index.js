const mapAlbumsDB = ({
  id,
  name,
  year,
  songs,
}) => ({
  id,
  name,
  year,
  songs,
});

const mapSongDB = ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  album_id,
}) => ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  album_id,
});
const filterTitleSongByParam = (song, title) => (song.title.toLowerCase().includes(title));
const filterPerformerSongByParam = (song, performer) => (song.performer.toLowerCase().includes(performer));
module.exports = {
  mapAlbumsDB,
  mapSongDB,
  filterPerformerSongByParam,
  filterTitleSongByParam
};