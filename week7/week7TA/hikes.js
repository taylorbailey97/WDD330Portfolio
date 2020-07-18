export default class hikes {
    imgBasePath = "";
    hikeList = [];

    constructor(imgBasePath, hikeList) {
        this.imgBasePath = imgBasePath;
        this.hikeList = hikeList;
    }
    
    showHikeList() {
      const hikeListElement = document.getElementById("hikes");
      hikeListElement.innerHTML = "";
      this.renderHikeList(this.hikeList, hikeListElement);
    }

    renderHikeList(hikes, parent) {
      hikes.forEach(hike => {
        parent.appendChild(this.renderOneHike(hike));
      });
    }

    renderOneHike(hike) {
        const item = document.createElement("li");
        const div = 


        item.innerHTML = ` <h2>${hike.name}</h2>
              <div class="container">
                <div class="image"><img src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
                <div>
                      <div>
                          <h3>Distance</h3>
                          <p>${hike.distance}</p>

                          <h3>Difficulty</h3>
                          <p>${hike.difficulty}</p>
                      </div>
                </div>

              </div>`;

        return item;
      }
}

/* <div class="commentContainer">
<h3 class="showComments" id="${ hike.name + 'cShow'}">Comments: </h3>
<ul id="${ hike.name + 'comments'}" class="commentUL">
</ul>
</div> */