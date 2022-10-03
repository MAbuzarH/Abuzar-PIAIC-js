let name1 = "jon";
let track1 = "klmn";
let at1 = "jana";
let name2 = "jalfrazi";
let track2 = "hjkm";
let at2 = "kamal";
let name3 = "coco";
let track3 = "jyh";
let at3 = "hjkl";
//make 3 object
let i = 0;
function make_album(name, title, trak) {
  album_obj = {
    artistName: name,
    albumTitle: title,
    albumtrak: trak,
  };
  console.log(album_obj);
  i++;
}
make_album(name1, at1, track1);
make_album(name2, at2, track2);
make_album(name3, at3, track3);
console.log("Number of Tracks : " + i);
