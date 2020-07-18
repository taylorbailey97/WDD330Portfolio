import hikes from './hikes.js';
import { Comment, Comments } from './comments.js';
//create an array of hikes
const hikeList = [
    {
      name: "Bechler Falls",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description:
        "Beautiful short hike along the Bechler river to Bechler Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
    },
    {
      name: "Teton Canyon",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description: "Beautiful short (or long) hike through Teton Canyon.",
      directions:
        "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
    },
    {
      name: "Denanda Falls",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "7 miles",
      difficulty: "Moderate",
      description:
        "Beautiful hike through Bechler meadows river to Denanda Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
    }
  ];
  const imgBasePath = "//byui-cit.github.io/cit261/examples/";
  
  const nHikes = new hikes(imgBasePath, hikeList);


  //on load grab the array and insert it into the page
  window.addEventListener("load", () => {
      nHikes.showHikeList();
  });


  const listCom = [
    new Comment('Bechler Falls', "Great Hike", 'Hike'),
    new Comment('Bechler Falls', "This hike blows", 'Hike'),
    new Comment('Bechler Falls', "Wish I could get my gas back", 'Hike')
  ];


  const hikeComments = new Comments(listCom);
  function addNewComment() {
    let commentInput = document.getElementById('commentText');
    let commentName = document.getElementById('selectBox');
    if (commentInput.value === '' || commentName.value === '') {
      alert("You must write something!");
    } else {
      hikeComments.addComment(commentName.value, commentInput.value, 'hike');
      hikeComments.renderComments(hikeComments.filterCommentsByName(commentName.value));
      commentInput.value = '';
    }
  }
  
  document.getElementById('submitComment').addEventListener('click', addNewComment);

  function showComments(e) {
    e.target.classList.toggle('showComments'); 
  }

  
  window.addEventListener("load", () => {
    hikeComments.renderComments(hikeComments.comments);
    let selectBox = document.getElementById('selectBox');
    let selectComments = document.getElementById('selectComments');
    selectComments.options.add( new Option('All Hikes', 'All', true) );
    hikeList.forEach(hike => {
      selectComments.options.add( new Option(hike.name, hike.name, false) );
      selectBox.options.add( new Option(hike.name, hike.name, false) );
    });
    document.getElementById('showComments').addEventListener('click', showComments);
    document.getElementById('filterComments').addEventListener('click', () => {
      hikeComments.renderComments(hikeComments.filterCommentsByName(selectComments.value));
    });
  });
  
  
  