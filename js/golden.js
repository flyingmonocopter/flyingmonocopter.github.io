var goldens = [
  '부자나 가난한자나 자연 앞에서는 누구나 세들어 사는 존재다.',
  '사람은 누구나 자신이 결정하지 않은 길을 가야할 때도 있다.',
  '아름다운 꿈은 평범한 사람들에게는 받아들여지기 어려운 경우도 많다.',
  '생각하는 대로 살지 않으면 사는 대로 생각하게 될 것이다.',
  '건물주도 자연 앞에서는 임차인이다.',
  '인생에 여유는 있어야 하지만, 편안히 살려는 것은 인생을 낭비하려는 것이다.',
  '인생의 목적은 다양한 경험에 있다.',
  '누구나 모르는 것이 아는 것 보다 많다.',
  '댓가와 관계 없는 노력은 멋지다. 멋짐을 강요하는 사회는 더럽다.',
  '불편하게 살고 천천히 살자.'
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function reload() {
  var idx = getRandomInt(goldens.length);
  var div_golden = document.getElementById('golden');
  div_golden.innerHTML = goldens[idx];
}

reload()
