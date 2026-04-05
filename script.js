
function getPieceSVG(color, type) {
  const isW = color === 'w';

  
  const fill1 = isW ? '#fff8e1' : '#1a3a6e';   
  const fill2 = isW ? '#ffe082' : '#2979ff';  
  const stroke= isW ? '#b8860b' : '#40c4ff';  
  const shine = isW ? 'rgba(255,255,255,0.85)' : 'rgba(120,200,255,0.6)';
  const shadow= isW ? 'rgba(180,120,0,0.5)'   : 'rgba(0,40,120,0.6)';
  const id = color+type+Math.random().toString(36).slice(2,6);

  const grad = `
    <defs>
      <linearGradient id="g${id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${fill1}"/>
        <stop offset="100%" stop-color="${fill2}"/>
      </linearGradient>
      <radialGradient id="sh${id}" cx="50%" cy="80%" r="50%">
        <stop offset="0%" stop-color="${shadow}" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="${shadow}" stop-opacity="0"/>
      </radialGradient>
    </defs>`;

  const shapes = {
    K: `${grad}
      <!-- shadow -->
      <ellipse cx="27" cy="50" rx="18" ry="4" fill="url(#sh${id})"/>
      <!-- body -->
      <rect x="10" y="38" width="34" height="10" rx="3" fill="url(#g${id})" stroke="${stroke}" stroke-width="1.5"/>
      <rect x="13" y="28" width="28" height="12" rx="2" fill="url(#g${id})" stroke="${stroke}" stroke-width="1.5"/>
      <rect x="16" y="20" width="22" height="10" rx="2" fill="url(#g${id})" stroke="${stroke}" stroke-width="1.5"/>
      <!-- cross -->
      <rect x="24" y="8"  width="6"  height="16" rx="2" fill="${fill2}" stroke="${stroke}" stroke-width="1.5"/>
      <rect x="18" y="11" width="18" height="5"  rx="2" fill="${fill2}" stroke="${stroke}" stroke-width="1.5"/>
      <!-- crown jewel -->
      <circle cx="27" cy="11" r="2.5" fill="${stroke}" opacity="0.9"/>
      <!-- shine -->
      <ellipse cx="20" cy="25" rx="5" ry="2.5" fill="${shine}" opacity="0.5"/>`,

    Q: `${grad}
      <ellipse cx="27" cy="50" rx="18" ry="4" fill="url(#sh${id})"/>
      <!-- base -->
      <rect x="10" y="40" width="34" height="8" rx="3" fill="url(#g${id})" stroke="${stroke}" stroke-width="1.5"/>
      <rect x="14" y="30" width="26" height="12" rx="2" fill="url(#g${id})" stroke="${stroke}" stroke-width="1.5"/>
      <!-- crown points -->
      <polygon points="14,30 14,16 19,22 27,10 35,22 40,16 40,30" fill="url(#g${id})" stroke="${stroke}" stroke-width="1.5"/>
      <!-- jewels on crown -->
      <circle cx="14" cy="16" r="3"  fill="${fill2}" stroke="${stroke}" stroke-width="1"/>
      <circle cx="27" cy="10" r="3.5" fill="${fill2}" stroke="${stroke}" stroke-width="1"/>
      <circle cx="40" cy="16" r="3"  fill="${fill2}" stroke="${stroke}" stroke-width="1"/>
      <circle cx="19" cy="22" r="2"  fill="${stroke}" opacity="0.8"/>
      <circle cx="35" cy="22" r="2"  fill="${stroke}" opacity="0.8"/>
      <ellipse cx="21" cy="35" rx="5" ry="2" fill="${shine}" opacity="0.45"/>`,

    R: `${grad}
      <ellipse cx="27" cy="50" rx="18" ry="4" fill="url(#sh${id})"/>
      <rect x="10" y="40" width="34" height="8" rx="3" fill="url(#g${id})" stroke="${stroke}" stroke-width="1.5"/>
      <rect x="13" y="22" width="28" height="20" rx="2" fill="url(#g${id})" stroke="${stroke}" stroke-width="1.5"/>
      <!-- battlements -->
      <rect x="12" y="12" width="8"  height="12" rx="2" fill="url(#g${id})" stroke="${stroke}" stroke-width="1.5"/>
      <rect x="23" y="12" width="8"  height="12" rx="2" fill="url(#g${id})" stroke="${stroke}" stroke-width="1.5"/>
      <rect x="34" y="12" width="8"  height="12" rx="2" fill="url(#g${id})" stroke="${stroke}" stroke-width="1.5"/>
      <!-- window -->
      <rect x="21" y="27" width="12" height="10" rx="1" fill="${shadow}" opacity="0.4"/>
      <ellipse cx="20" cy="28" rx="4" ry="2" fill="${shine}" opacity="0.4"/>`,

    B: `${grad}
      <ellipse cx="27" cy="50" rx="16" ry="4" fill="url(#sh${id})"/>
      <rect x="11" y="40" width="32" height="8" rx="3" fill="url(#g${id})" stroke="${stroke}" stroke-width="1.5"/>
      <ellipse cx="27" cy="36" rx="14" ry="6" fill="url(#g${id})" stroke="${stroke}" stroke-width="1.5"/>
      <!-- body -->
      <ellipse cx="27" cy="26" rx="10" ry="12" fill="url(#g${id})" stroke="${stroke}" stroke-width="1.5"/>
      <!-- tip -->
      <ellipse cx="27" cy="14" rx="5" ry="6" fill="url(#g${id})" stroke="${stroke}" stroke-width="1.5"/>
      <circle  cx="27" cy="9"  r="3" fill="${fill2}" stroke="${stroke}" stroke-width="1.2"/>
      <!-- slash -->
      <line x1="21" y1="22" x2="33" y2="30" stroke="${stroke}" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
      <ellipse cx="22" cy="20" rx="3" ry="1.5" fill="${shine}" opacity="0.5"/>`,

    N: `${grad}
      <ellipse cx="27" cy="50" rx="16" ry="4" fill="url(#sh${id})"/>
      <rect x="12" y="40" width="30" height="8" rx="3" fill="url(#g${id})" stroke="${stroke}" stroke-width="1.5"/>
      <!-- horse body -->
      <path d="M18,40 C16,34 14,26 16,20 C18,14 22,10 26,8 C30,6 34,8 36,12 C38,16 36,20 34,22 C32,24 30,24 30,28 C30,32 32,36 30,40 Z"
            fill="url(#g${id})" stroke="${stroke}" stroke-width="1.5"/>
      <!-- head -->
      <path d="M26,8 C24,6 20,6 18,10 C16,14 17,18 20,20 C22,22 26,20 28,18 C30,16 30,12 28,10 Z"
            fill="url(#g${id})" stroke="${stroke}" stroke-width="1.5"/>
      <!-- eye -->
      <circle cx="21" cy="13" r="2.5" fill="${stroke}"/>
      <circle cx="21" cy="13" r="1.2" fill="white"/>
      <!-- mane -->
      <path d="M26,8 C28,4 32,4 34,8 C32,8 30,10 30,12" fill="none" stroke="${fill2}" stroke-width="2" stroke-linecap="round"/>
      <!-- nostril -->
      <ellipse cx="18" cy="19" rx="1.5" ry="1" fill="${stroke}" opacity="0.6"/>
      <ellipse cx="22" cy="16" rx="3" ry="1.5" fill="${shine}" opacity="0.5"/>`,

    P: `${grad}
      <ellipse cx="27" cy="50" rx="14" ry="4" fill="url(#sh${id})"/>
      <rect x="13" y="41" width="28" height="7" rx="3" fill="url(#g${id})" stroke="${stroke}" stroke-width="1.5"/>
      <rect x="17" y="34" width="20" height="9" rx="2" fill="url(#g${id})" stroke="${stroke}" stroke-width="1.5"/>
      <!-- neck -->
      <rect x="22" y="28" width="10" height="8" rx="2" fill="url(#g${id})" stroke="${stroke}" stroke-width="1.5"/>
      <!-- head -->
      <circle cx="27" cy="22" r="9" fill="url(#g${id})" stroke="${stroke}" stroke-width="1.5"/>
      <!-- shine -->
      <ellipse cx="23" cy="18" rx="4" ry="2.5" fill="${shine}" opacity="0.55"/>`
  };

  return `<svg viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">${shapes[type] || ''}</svg>`;
}

// small captured icon (text)
const PIECE_CAPTURED_ICON = { P:'♙', N:'♘', B:'♗', R:'♖', Q:'♕' };

const PIECE_POINTS = {
  P:1, N:3, B:3, R:5, Q:9, K:0
};

const SPECIAL_BONUS = {
  castle: 2,
  promotion: 4,
  fork: 5,
  pin: 3,
  doubleCheck: 4,
  enPassant: 1
};


let gameMode = '2p';
let board = [];
let turn = 'w';
let selected = null;
let legalMoves = [];
let scores = { w:0, b:0 };
let capturedBy = { w:[], b:[] };
let moveLog = [];
let enPassantSq = null;
let castlingRights = { w:{K:true,Q:true}, b:{K:true,Q:true} };
let checkCounts = {}; 
let gameOver = false;
let promotionCallback = null;
let botThinking = false;
let winTimer = null;
let checkHistory = []; 

function initBoard() {
  board = [];
  const backRank = ['R','N','B','Q','K','B','N','R'];
  for (let r=0;r<8;r++) {
    board[r] = [];
    for (let c=0;c<8;c++) {
      if (r===0) board[r][c] = {color:'b', type:backRank[c]};
      else if (r===1) board[r][c] = {color:'b', type:'P'};
      else if (r===6) board[r][c] = {color:'w', type:'P'};
      else if (r===7) board[r][c] = {color:'w', type:backRank[c]};
      else board[r][c] = null;
    }
  }
}

function buildBoardDOM() {
  const container = document.getElementById('board-rows');
  container.innerHTML = '';

  const fileTop = document.getElementById('file-top');
  const fileBot = document.getElementById('file-bot');
  fileTop.innerHTML = fileBot.innerHTML = '';
  const files = ['a','b','c','d','e','f','g','h'];

  
  const spacer = () => { const d=document.createElement('div'); d.style.width='20px'; return d; };
  fileTop.appendChild(spacer()); fileBot.appendChild(spacer());

  files.forEach(f => {
    [fileTop, fileBot].forEach(row => {
      const d = document.createElement('div');
      d.className = 'file-label';
      d.textContent = f;
      row.appendChild(d);
    });
  });

  for (let r=0;r<8;r++) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'board-row';

    
    const rl = document.createElement('div');
    rl.className = 'rank-label';
    rl.textContent = 8-r;
    rowDiv.appendChild(rl);

    const rowBoard = document.createElement('div');
    rowBoard.style.display='flex';

    for (let c=0;c<8;c++) {
      const sq = document.createElement('div');
      sq.className = 'sq ' + ((r+c)%2===0 ? 'light' : 'dark');
      sq.dataset.r = r; sq.dataset.c = c;
      sq.onclick = () => onSquareClick(r, c);
      rowBoard.appendChild(sq);
    }
    rowDiv.appendChild(rowBoard);
    container.appendChild(rowDiv);
  }
}

function renderBoard() {
  const squares = document.querySelectorAll('.sq');
  squares.forEach(sq => {
    const r = +sq.dataset.r, c = +sq.dataset.c;
    sq.innerHTML = '';
    sq.classList.remove('selected','in-check');

    const piece = board[r][c];
    if (piece) {
      const div = document.createElement('div');
      div.className = 'piece ' + (piece.color==='w' ? 'white' : 'black');
      div.innerHTML = getPieceSVG(piece.color, piece.type);
      sq.appendChild(div);
    }

    
    if (selected && selected.r===r && selected.c===c) sq.classList.add('selected');

    
    const kingPos = findKing(turn);
    if (isInCheck(turn) && kingPos && kingPos.r===r && kingPos.c===c) sq.classList.add('in-check');

    
    const isLegal = legalMoves.some(m => m.r===r && m.c===c);
    if (isLegal) {
      if (piece && piece.color !== turn) {
        const ring = document.createElement('div');
        ring.className = 'capture-ring';
        sq.appendChild(ring);
      } else {
        const dot = document.createElement('div');
        dot.className = 'move-dot';
        sq.appendChild(dot);
      }
    }
  });
}

function onSquareClick(r, c) {
  if (gameOver || botThinking) return;
  if (gameMode === 'bot' && turn === 'b') return;

  const piece = board[r][c];

  if (selected) {
    const move = legalMoves.find(m => m.r===r && m.c===c);
    if (move) {
      executeMove(selected.r, selected.c, r, c, move);
      selected = null; legalMoves = [];
      renderBoard();
      if (!gameOver && gameMode==='bot' && turn==='b') {
        setTimeout(botMove, 400);
      }
      return;
    }
    if (piece && piece.color===turn) {
      selected = {r,c};
      legalMoves = getLegalMoves(r,c);
      renderBoard(); return;
    }
    selected = null; legalMoves = [];
    renderBoard(); return;
  }

  if (piece && piece.color===turn) {
    selected = {r,c};
    legalMoves = getLegalMoves(r,c);
  }
  renderBoard();
}
function executeMove(fr, fc, tr, tc, moveData={}) {
  const piece = board[fr][fc];
  const target = board[tr][tc];
  let specialTag = moveData.special || null;
  let bonusPoints = 0;
  let capturedPiece = target;

  
  if (piece.type==='P' && fc!==tc && !target) {
    const epR = fr;
    capturedPiece = board[epR][tc];
    board[epR][tc] = null;
    specialTag = 'En Passant';
    bonusPoints += SPECIAL_BONUS.enPassant;
  }

  
  board[tr][tc] = piece;
  board[fr][fc] = null;

  
  if (piece.type==='K' && Math.abs(fc-tc)===2) {
    const row = fr;
    if (tc===6) { board[row][5]=board[row][7]; board[row][7]=null; }
    else         { board[row][3]=board[row][0]; board[row][0]=null; }
    specialTag = 'Castle';
    bonusPoints += SPECIAL_BONUS.castle;
  }

  
  if (piece.type==='K') { castlingRights[piece.color].K=false; castlingRights[piece.color].Q=false; }
  if (piece.type==='R') {
    if (fc===0) castlingRights[piece.color].Q=false;
    if (fc===7) castlingRights[piece.color].K=false;
  }

  
  enPassantSq = null;
  if (piece.type==='P' && Math.abs(fr-tr)===2) {
    enPassantSq = {r:(fr+tr)/2, c:tc};
  }

  
  if (capturedPiece) {
    const pts = PIECE_POINTS[capturedPiece.type] || 0;
    scores[piece.color] = Math.max(0, scores[piece.color] + pts + bonusPoints);
    capturedBy[piece.color].push(capturedPiece.type);
  } else if (bonusPoints > 0) {
    scores[piece.color] = Math.max(0, scores[piece.color] + bonusPoints);
  }

  
  if (piece.type==='P' && (tr===0 || tr===7)) {
    doPromotion(tr, tc, piece.color, () => {
      scores[piece.color] = Math.max(0, scores[piece.color] + SPECIAL_BONUS.promotion);
      finishMove(fr,fc,tr,tc,piece,'Promote',bonusPoints);
    });
    return;
  }

  finishMove(fr, fc, tr, tc, piece, specialTag, bonusPoints);
}

function finishMove(fr, fc, tr, tc, piece, specialTag, bonusPoints) {
  const opponent = turn==='w'?'b':'w';
  turn = opponent;

 
  const inCheck = isInCheck(turn);
  let checkStr = '';
  if (inCheck) {
   
    const attacker = findChecker(turn);
    if (attacker) {
      const key = attacker.color+attacker.type+attacker.r+attacker.c;
      checkCounts[key] = (checkCounts[key]||0)+1;
      if (checkCounts[key] > 10) { endGame('draw','Same-piece check limit reached'); return; }
    }
    checkStr = ' +';
    if (isCheckmate(turn)) { endGame(turn==='w'?'b-wins':'w-wins','Checkmate'); return; }
  }

 
  if (!inCheck && isStalemate(turn)) { endGame('draw','Stalemate'); return; }

 
  const forkPts = detectFork(turn);
  if (forkPts > 0) {
    scores[piece.color] = Math.max(0, scores[piece.color] + SPECIAL_BONUS.fork);
    specialTag = (specialTag?specialTag+' + ':'') + 'Fork';
  }

 
  if (detectPin(turn)) {
    scores[piece.color] = Math.max(0, scores[piece.color] + SPECIAL_BONUS.pin);
    specialTag = (specialTag?specialTag+' + ':'') + 'Pin';
  }

  
  const PIECE_SYM = {wK:'♔',wQ:'♕',wR:'♖',wB:'♗',wN:'♘',wP:'♙',bK:'♚',bQ:'♛',bR:'♜',bB:'♝',bN:'♞',bP:'♟'};
  const colNames = ['a','b','c','d','e','f','g','h'];
  const notation = `${PIECE_SYM[piece.color+piece.type]}${colNames[fc]}${8-fr}→${colNames[tc]}${8-tr}${checkStr}`;
  moveLog.push({ notation, special: specialTag, color: piece.color });
  logMove(notation, specialTag);

  updateUI();
  renderBoard();
}
function doPromotion(r, c, color, cb) {
  const modal = document.getElementById('promotion-modal');
  const container = document.getElementById('promo-pieces');
  container.innerHTML = '';
  modal.classList.add('show');

  ['Q','R','B','N'].forEach(type => {
    const btn = document.createElement('div');
    btn.className = 'promo-piece';
    btn.style.cssText = 'width:64px;height:64px;';
    const inner = document.createElement('div');
    inner.className = 'piece ' + (color==='w'?'white':'black');
    inner.style.cssText = 'width:100%;height:100%;';
    inner.innerHTML = getPieceSVG(color, type);
    btn.appendChild(inner);
    btn.onclick = () => {
      board[r][c] = {color, type};
      modal.classList.remove('show');
      cb();
    };
    container.appendChild(btn);
  });
}
function getLegalMoves(r, c) {
  const moves = getRawMoves(r, c);
  return moves.filter(m => {
    const saved = JSON.parse(JSON.stringify(board));
    const savedEP = enPassantSq ? {...enPassantSq} : null;
    applyMoveToBoard(r,c,m.r,m.c,board);
    const inCheck = isInCheck(turn);
    
    for(let i=0;i<8;i++) for(let j=0;j<8;j++) board[i][j]=saved[i][j];
    enPassantSq = savedEP;
    return !inCheck;
  });
}

function applyMoveToBoard(fr,fc,tr,tc,b) {
  const piece = b[fr][fc];
  if (!piece) return;
  
  if (piece.type==='P' && fc!==tc && !b[tr][tc]) b[fr][tc]=null;
  
  if (piece.type==='K' && Math.abs(fc-tc)===2) {
    if (tc===6){ b[fr][5]=b[fr][7]; b[fr][7]=null; }
    else        { b[fr][3]=b[fr][0]; b[fr][0]=null; }
  }
  b[tr][tc]=piece; b[fr][fc]=null;
}

function getRawMoves(r, c) {
  const piece = board[r][c];
  if (!piece) return [];
  const moves = [];
  const {color, type} = piece;
  const opp = color==='w'?'b':'w';
  const dir = color==='w'?-1:1;

  const inBounds = (r,c) => r>=0&&r<8&&c>=0&&c<8;
  const isEmpty  = (r,c) => inBounds(r,c) && !board[r][c];
  const isOpp    = (r,c) => inBounds(r,c) && board[r][c]?.color===opp;
  const add      = (tr,tc,s={}) => { if(inBounds(tr,tc)) moves.push({r:tr,c:tc,...s}); };
  const slide    = (dr,dc) => {
    let nr=r+dr, nc=c+dc;
    while(inBounds(nr,nc)) {
      if (board[nr][nc]) { if(board[nr][nc].color===opp) add(nr,nc); break; }
      add(nr,nc); nr+=dr; nc+=dc;
    }
  };

  if (type==='P') {
    if (isEmpty(r+dir,c)) {
      add(r+dir,c);
      if ((color==='w'&&r===6)||(color==='b'&&r===1)) if(isEmpty(r+2*dir,c)) add(r+2*dir,c);
    }
    [-1,1].forEach(dc => {
      if (isOpp(r+dir,c+dc)) add(r+dir,c+dc);
      if (enPassantSq?.r===r+dir&&enPassantSq?.c===c+dc) add(r+dir,c+dc);
    });
  }
  else if (type==='N') {
    [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]].forEach(([dr,dc])=>{
      const nr=r+dr,nc=c+dc;
      if(inBounds(nr,nc)&&board[nr][nc]?.color!==color) add(nr,nc);
    });
  }
  else if (type==='B') { [[-1,-1],[-1,1],[1,-1],[1,1]].forEach(([dr,dc])=>slide(dr,dc)); }
  else if (type==='R') { [[-1,0],[1,0],[0,-1],[0,1]].forEach(([dr,dc])=>slide(dr,dc)); }
  else if (type==='Q') { [[-1,-1],[-1,1],[1,-1],[1,1],[-1,0],[1,0],[0,-1],[0,1]].forEach(([dr,dc])=>slide(dr,dc)); }
  else if (type==='K') {
    [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]].forEach(([dr,dc])=>{
      const nr=r+dr,nc=c+dc;
      if(inBounds(nr,nc)&&board[nr][nc]?.color!==color) add(nr,nc);
    });
    
    const row = color==='w'?7:0;
    if (r===row && c===4) {
      if (castlingRights[color].K && !board[row][5] && !board[row][6] && !board[row][7]
          && !isSquareAttacked(row,4,opp) && !isSquareAttacked(row,5,opp) && !isSquareAttacked(row,6,opp))
        add(row,6,{special:'Castle'});
      if (castlingRights[color].Q && !board[row][3] && !board[row][2] && !board[row][1] && board[row][0]
          && !isSquareAttacked(row,4,opp) && !isSquareAttacked(row,3,opp) && !isSquareAttacked(row,2,opp))
        add(row,2,{special:'Castle'});
    }
  }
  return moves;
}
function findKing(color) {
  for(let r=0;r<8;r++) for(let c=0;c<8;c++)
    if(board[r][c]?.color===color&&board[r][c]?.type==='K') return {r,c};
  return null;
}

function isSquareAttacked(r, c, byColor) {
  for(let fr=0;fr<8;fr++) for(let fc=0;fc<8;fc++) {
    if(board[fr][fc]?.color!==byColor) continue;
    const moves = getRawMovesForAttack(fr,fc);
    if(moves.some(m=>m.r===r&&m.c===c)) return true;
  }
  return false;
}

function getRawMovesForAttack(r,c) {
  const piece = board[r][c];
  if(!piece) return [];
  const {color,type} = piece;
  const opp = color==='w'?'b':'w';
  const dir = color==='w'?-1:1;
  const moves = [];
  const inBounds=(r,c)=>r>=0&&r<8&&c>=0&&c<8;
  const add=(tr,tc)=>{if(inBounds(tr,tc))moves.push({r:tr,c:tc});};
  const slide=(dr,dc)=>{
    let nr=r+dr,nc=c+dc;
    while(inBounds(nr,nc)){
      if(board[nr][nc]){if(board[nr][nc].color===opp)add(nr,nc);break;}
      add(nr,nc);nr+=dr;nc+=dc;
    }
  };
  if(type==='P'){[-1,1].forEach(dc=>{if(inBounds(r+dir,c+dc))add(r+dir,c+dc);});}
  else if(type==='N'){[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]].forEach(([dr,dc])=>{const nr=r+dr,nc=c+dc;if(inBounds(nr,nc)&&board[nr][nc]?.color!==color)add(nr,nc);});}
  else if(type==='B'){[[-1,-1],[-1,1],[1,-1],[1,1]].forEach(([dr,dc])=>slide(dr,dc));}
  else if(type==='R'){[[-1,0],[1,0],[0,-1],[0,1]].forEach(([dr,dc])=>slide(dr,dc));}
  else if(type==='Q'){[[-1,-1],[-1,1],[1,-1],[1,1],[-1,0],[1,0],[0,-1],[0,1]].forEach(([dr,dc])=>slide(dr,dc));}
  else if(type==='K'){[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]].forEach(([dr,dc])=>{const nr=r+dr,nc=c+dc;if(inBounds(nr,nc)&&board[nr][nc]?.color!==color)add(nr,nc);});}
  return moves;
}

function isInCheck(color) {
  const king = findKing(color);
  if (!king) return false;
  return isSquareAttacked(king.r, king.c, color==='w'?'b':'w');
}

function findChecker(color) {
  const king = findKing(color);
  if (!king) return null;
  const opp = color==='w'?'b':'w';
  for(let r=0;r<8;r++) for(let c=0;c<8;c++) {
    if(board[r][c]?.color!==opp) continue;
    const moves = getRawMovesForAttack(r,c);
    if(moves.some(m=>m.r===king.r&&m.c===king.c))
      return {r,c,...board[r][c]};
  }
  return null;
}

function getAllLegalMoves(color) {
  const allMoves = [];
  for(let r=0;r<8;r++) for(let c=0;c<8;c++) {
    if(board[r][c]?.color===color) {
      const moves = getLegalMoves(r,c);
      moves.forEach(m => allMoves.push({fr:r,fc:c,...m}));
    }
  }
  return allMoves;
}

function isCheckmate(color) { return getAllLegalMoves(color).length===0 && isInCheck(color); }
function isStalemate(color) { return getAllLegalMoves(color).length===0 && !isInCheck(color); }

function detectFork(opponentColor) {
  const attacker = turn==='w'?'b':'w'; // the one who just moved
  for(let r=0;r<8;r++) for(let c=0;c<8;c++) {
    if(board[r][c]?.color!==attacker) continue;
    const moves = getRawMovesForAttack(r,c);
    let targets = moves.filter(m => board[m.r][m.c]?.color===opponentColor && ['K','Q','R'].includes(board[m.r][m.c]?.type));
    if(targets.length>=2) return targets.length;
  }
  return 0;
}

function detectPin(color) {
  const opp = color;
  const atk = opp==='w'?'b':'w';
  const king = findKing(opp);
  if(!king) return false;

  for(let r=0;r<8;r++) for(let c=0;c<8;c++) {
    const piece = board[r][c];
    if(!piece||piece.color!==atk) continue;
    if(!['B','R','Q'].includes(piece.type)) continue;
    const dirs = piece.type==='B'?[[-1,-1],[-1,1],[1,-1],[1,1]]:
                 piece.type==='R'?[[-1,0],[1,0],[0,-1],[0,1]]:
                 [[-1,-1],[-1,1],[1,-1],[1,1],[-1,0],[1,0],[0,-1],[0,1]];
    for(const [dr,dc] of dirs) {
      let nr=r+dr,nc=c+dc;
      let oppPiece=null;
      while(nr>=0&&nr<8&&nc>=0&&nc<8) {
        if(board[nr][nc]) {
          if(board[nr][nc].color===opp) {
            if(!oppPiece&&board[nr][nc].type!=='K') { oppPiece={r:nr,c:nc}; }
            else if(oppPiece&&nr===king.r&&nc===king.c) { return true; }
            else break;
          } else break;
        }
        nr+=dr; nc+=dc;
      }
    }
  }
  return false;
}

function botMove() {
  botThinking = true;
  updateStatusText('Bot is thinking…', true);
  setTimeout(() => {
    const moves = getAllLegalMoves('b');
    if(moves.length===0) { botThinking=false; return; }

    let best=null, bestScore=-Infinity;
    const shuffled = moves.sort(()=>Math.random()-.5);
    for(const m of shuffled) {
      const saved=JSON.parse(JSON.stringify(board));
      const savedEP=enPassantSq?{...enPassantSq}:null;
      const savedCR=JSON.parse(JSON.stringify(castlingRights));
      applyMoveToBoard(m.fr,m.fc,m.r,m.c,board);
      const s = minimax(2, false, -Infinity, Infinity);
      for(let i=0;i<8;i++)for(let j=0;j<8;j++)board[i][j]=saved[i][j];
      enPassantSq=savedEP; castlingRights=savedCR;
      if(s>bestScore){bestScore=s;best=m;}
    }

    if(best) {
      const savedEP=enPassantSq?{...enPassantSq}:null;
      const savedCR=JSON.parse(JSON.stringify(castlingRights));
      executeMove(best.fr,best.fc,best.r,best.c,best);
    }
    botThinking=false;
  }, 50);
}

function minimax(depth, isMax, alpha, beta) {
  if(depth===0) return evaluateBoard();
  const color = isMax?'b':'w';
  const moves = getAllLegalMoves(color);
  if(moves.length===0) {
    if(isInCheck(color)) return isMax?-10000:10000;
    return 0;
  }
  if(isMax) {
    let best=-Infinity;
    for(const m of moves.slice(0,20)) {
      const saved=JSON.parse(JSON.stringify(board));
      applyMoveToBoard(m.fr,m.fc,m.r,m.c,board);
      best=Math.max(best,minimax(depth-1,false,alpha,beta));
      for(let i=0;i<8;i++)for(let j=0;j<8;j++)board[i][j]=saved[i][j];
      alpha=Math.max(alpha,best);
      if(beta<=alpha) break;
    }
    return best;
  } else {
    let best=Infinity;
    for(const m of moves.slice(0,20)) {
      const saved=JSON.parse(JSON.stringify(board));
      applyMoveToBoard(m.fr,m.fc,m.r,m.c,board);
      best=Math.min(best,minimax(depth-1,true,alpha,beta));
      for(let i=0;i<8;i++)for(let j=0;j<8;j++)board[i][j]=saved[i][j];
      beta=Math.min(beta,best);
      if(beta<=alpha) break;
    }
    return best;
  }
}

const PST_PAWN_B = [
  [0,0,0,0,0,0,0,0],[5,10,10,-20,-20,10,10,5],[5,-5,-10,0,0,-10,-5,5],
  [0,0,0,20,20,0,0,0],[5,5,10,25,25,10,5,5],[10,10,20,30,30,20,10,10],
  [50,50,50,50,50,50,50,50],[0,0,0,0,0,0,0,0]
];

function evaluateBoard() {
  let score=0;
  const pieceVals={P:100,N:320,B:330,R:500,Q:900,K:20000};
  for(let r=0;r<8;r++) for(let c=0;c<8;c++) {
    const p=board[r][c];
    if(!p) continue;
    const v=pieceVals[p.type]||0;
    const pst = p.type==='P'?(p.color==='b'?PST_PAWN_B[r][c]:PST_PAWN_B[7-r][c]):0;
    score += p.color==='b' ? v+pst : -(v+pst);
  }
  return score;
}

function endGame(result, reason) {
  gameOver = true;
  selected = null; legalMoves = [];
  renderBoard();

  let title, subtitle;
  if(result==='draw')      { title='DRAW!'; subtitle=reason.toUpperCase(); }
  else if(result==='w-wins'){ title='WHITE WINS!'; subtitle=reason.toUpperCase(); }
  else                      { title='BLACK WINS!'; subtitle=reason.toUpperCase(); }

  document.getElementById('win-title').textContent = title;
  document.getElementById('win-subtitle').textContent = subtitle;
  document.getElementById('win-score-white').textContent = scores.w;
  document.getElementById('win-score-black').textContent = scores.b;

  const overlay = document.getElementById('win-overlay');
  overlay.classList.add('show');

  if(result!=='draw') spawnConfetti();

  let countdown = 10;
  const countEl = document.getElementById('win-countdown');
  winTimer = setInterval(()=>{
    countdown--;
    countEl.textContent = `Auto-closing in ${countdown}s…`;
    if(countdown<=0) { clearInterval(winTimer); overlay.classList.remove('show'); }
  }, 1000);
}

function spawnConfetti() {
  const container = document.getElementById('confetti-container');
  container.innerHTML = '';
  const colors = ['#c9a84c','#f0d080','#4a7c59','#c8a97e','#fff','#ff8080','#80aaff'];
  for(let i=0;i<120;i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.left = Math.random()*100 + 'vw';
    p.style.background = colors[Math.floor(Math.random()*colors.length)];
    p.style.width = (6+Math.random()*10)+'px';
    p.style.height = (6+Math.random()*10)+'px';
    p.style.borderRadius = Math.random()>.5?'50%':'2px';
    const dur = 2+Math.random()*4;
    p.style.animation = `confettiFall ${dur}s ${Math.random()*3}s linear forwards`;
    container.appendChild(p);
  }
  setTimeout(()=>{ container.innerHTML=''; }, 12000);
}

function updateUI() {
  document.getElementById('score-white').textContent = scores.w;
  document.getElementById('score-black').textContent = scores.b;

  const iconMap = {P:'♟',N:'♞',B:'♝',R:'♜',Q:'♛'};
  document.getElementById('captured-by-white').textContent =
    capturedBy.w.map(t=>iconMap[t]||t).join(' ');
  document.getElementById('captured-by-black').textContent =
    capturedBy.b.map(t=>iconMap[t]||t).join(' ');

  document.getElementById('card-white').classList.toggle('active-turn', turn==='w');
  document.getElementById('card-black').classList.toggle('active-turn', turn==='b');

  document.getElementById('turn-bar').textContent =
    turn==='w' ? '⬜ White to move' : '⬛ Black to move';

  if(!gameOver) updateStatusText(isInCheck(turn)?'CHECK!':turn==='w'?'White\'s Turn':'Black\'s Turn', isInCheck(turn));

  const maxCheck = Math.max(0,...Object.values(checkCounts));
  document.getElementById('check-count-display').textContent =
    maxCheck>0 ? `${maxCheck}/10` : '—';
}

function updateStatusText(text, isWarning=false) {
  const el = document.getElementById('status-text');
  el.textContent = text;
  el.className = 'status-value' + (isWarning?' check-warning':'');
}

function logMove(notation, special) {
  const log = document.getElementById('move-log');
  const div = document.createElement('div');
  div.className = 'move-entry';
  const num = moveLog.length;
  div.innerHTML = `<span>${num}.</span>${notation}` +
    (special ? `<span class="special-badge">${special}</span>` : '');
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
}

function startGame(mode) {
  gameMode = mode;
  document.getElementById('menu').style.display='none';
  document.getElementById('game').style.display='flex';
  document.getElementById('mode-label').textContent = mode==='bot'?'vs Bot':'2 Player';
  buildBoardDOM();
  resetState();
  renderBoard();
  updateUI();
}

function resetState() {
  initBoard();
  turn='w'; selected=null; legalMoves=[];
  scores={w:0,b:0}; capturedBy={w:[],b:[]};
  moveLog=[]; enPassantSq=null;
  castlingRights={w:{K:true,Q:true},b:{K:true,Q:true}};
  checkCounts={}; gameOver=false; botThinking=false;
  document.getElementById('move-log').innerHTML='';
  if(winTimer){clearInterval(winTimer);}
  document.getElementById('win-overlay').classList.remove('show');
}

function resetGame() {
  if(winTimer) clearInterval(winTimer);
  document.getElementById('win-overlay').classList.remove('show');
  document.getElementById('confetti-container').innerHTML='';
  resetState();
  renderBoard();
  updateUI();
}

function exitToMenu() {
  if(winTimer) clearInterval(winTimer);
  document.getElementById('win-overlay').classList.remove('show');
  document.getElementById('confetti-container').innerHTML='';
  document.getElementById('game').style.display='none';
  document.getElementById('menu').style.display='flex';
  resetState();
}

