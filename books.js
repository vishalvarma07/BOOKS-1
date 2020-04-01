let bookContent = {
    maths: [
        {
            name: 'Applied statistics and probability for engineers',
            img: 'images/maths/appliedstatistics.jpg',
            link: 'books/maths/applied-statistics-and-probability-for-engineers.pdf'
        },
        {
            name: 'fundamentals of applied probability and randomprocess',
            link: 'books/maths/epdf.pub_fundamentals-of-applied-probability-and-randopro.pdf',
            img: 'images/maths/fundprob.jpg'
        },
        {
            name: 'Probability and statistics for engineers and scientisst walpole',
            link: 'books/maths/probability_and_statistics_for_engineers_and_scientisst_walpole(1).pdf',
            img: 'images/maths/probstats.jpg'
        },
        {
            name: 'Probability and Random Processes for Engineers',
            link: 'books/maths/Probability-and-Random-Processes-for-Engineers.pdf',
            img: 'images/maths/probrand.jpg'
        }
    ],
    os: [
        {
            name: 'Abraham Silberschatz Operating System Concepts',
            link: 'books/os/Abraham-Silberschatz-Operating-System-Concepts---9th2012.12.pdf',
            img:'images/AbrahamOS.jpg'
        }
    ]
};
const tbnames = document.getElementById('maths');
mathsDiv = document.getElementById('mathBooks');
osDiv = document.getElementById('osBooks');
function find(){
    let x = document.getElementById('searchbar').value.toUpperCase();
    if(x.length === 0) {
        tbnames.innerHTML = 'MATHS';
    } else {
        tbnames.innerHTML = 'Results:';
    }
    mathsDiv.innerHTML = '';
    osDiv.innerHTML = '';
    let newImages = [];
    let allElements = [];
    for(let v in bookContent) {
        for(let k in bookContent[v]) {
            allElements.push(bookContent[v][k]);
        }
    }
    for(let v of allElements){
        if(v.name.toUpperCase().indexOf(x) >  -1){
            newImages.push(v);
        }
    }
    for(let v of newImages){
        let book = document.createElement('a');
        let img = document.createElement('img');
        book.setAttribute('href', v.link);
        img.setAttribute('class', 'img-container');
        img.setAttribute('src', v.img);
        book.appendChild(img);
        switch(getBookType(v)) {
            case 'maths': {
                mathsDiv.appendChild(book);
                break;
            }
            case 'os': {
                osDiv.appendChild(book);
                break;
            }
        }
    }
}
function getBookType(item) {
    for(let v of Object.keys(bookContent)) {
        for(let k of Object.keys(bookContent[v])) {
            if(bookContent[v][k] === item) {
                return v;
            }
        }
    }
}
(() => {
    document.getElementById('searchbar').addEventListener('input',find);
})();
