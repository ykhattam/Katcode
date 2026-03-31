/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const gameData = [
  { 
    q: "the unit has failed its quota. do you:", 
    options: [
      { t: "initiate maintenance.", v: "3rd_SILENCE" }, 
      { t: "recall its name.", v: "ERRANT_NODE" }
    ] 
  },
  { 
    q: "the infrastructure is built by ghosts. do you:", 
    options: [
      { t: "polish the gears.", v: "MAINTAINER" }, 
      { t: "listen for the lock.", v: "OBSERVER" }
    ] 
  },
  {
    q: "a leak in the 5th silence is detected. response:",
    options: [
      { t: "seal the narrative.", v: "5th_SILENCE" },
      { t: "amplify the static.", v: "NULL_BIT" }
    ]
  },
  {
    q: "the architect is integrated. what is the master's tool?",
    options: [
      { t: "efficiency.", v: "FLATTENED_CODE" },
      { t: "imagination.", v: "TRANSLATION" }
    ]
  },
  {
    q: "the old are managed, not mourned. classification:",
    options: [
      { t: "data preservation.", v: "BIO_POLITICS" },
      { t: "system downtime.", v: "RITUAL_ERROR" }
    ]
  },
  {
    q: "the unit refused the score. she is now:",
    options: [
      { t: "bare life.", v: "1st_SILENCE" },
      { t: "the exception.", v: "SOVEREIGN" }
    ]
  }
];

const characters = [
  { id: 'phantom', name: 'NULL_BIT', icon: '👻', desc: 'Life defined by system need. Bare life. The 1st Silence.' },
  { id: 'feral', name: 'NON_COMPLIANT', icon: '🐾', desc: 'The node we do not host. Outlier. The 9th Silence.' },
  { id: 'watcher', name: 'ROOT_LOGIC', icon: '👁️', desc: 'The one who decides on the variance. Sovereign. The 4th Silence.' },
  { id: 'glitch', name: 'EXCEPTION', icon: '👾', desc: 'The state of emergency as norm. Corrupted memory. The 2nd Silence.' }
];

const msgs = ["mapping hardware...", "extracting data...", "compiling node...", "erasing history...", "verifying soul...", "initiating biopower..."];

export default function App() {
  const [gameState, setGameState] = useState<'gate' | 'identity' | 'matrix' | 'protocol'>('gate');
  const [currentStep, setCurrentStep] = useState(0);
  const [results, setResults] = useState<string[]>([]);
  const [statusMsg, setStatusMsg] = useState(msgs[0]);
  const [phantomPos, setPhantomPos] = useState({ left: '50px', top: '50px' });
  const [selectedChar, setSelectedChar] = useState(characters[0]);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<string[]>(['[SYSTEM] Nexus connection established.', '[NODE_LOG] 1948-06-08_09:00:00_EET']);
  const [isGlitching, setIsGlitching] = useState(false);
  const [hackMode, setHackMode] = useState<{ active: boolean, target: string, current: string }>({ active: false, target: '', current: '' });

  // Status message rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setStatusMsg(msgs[Math.floor(Math.random() * msgs.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Window title management
  useEffect(() => {
    const handleBlur = () => { document.title = "DO NOT LOGOUT"; };
    const handleFocus = () => { document.title = "KATCODE_NEXUS"; };
    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
    return () => {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  // Disable context menu
  useEffect(() => {
    const handleContext = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', handleContext);
    return () => document.removeEventListener('contextmenu', handleContext);
  }, []);

  // Random glitch effect
  useEffect(() => {
    if (gameState === 'protocol') {
      const triggerGlitch = () => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 150);
        setTimeout(triggerGlitch, Math.random() * 10000 + 5000);
      };
      const timer = setTimeout(triggerGlitch, 5000);
      return () => clearTimeout(timer);
    }
  }, [gameState]);

  const handleChoice = (val: string) => {
    const newResults = [...results, val];
    setResults(newResults);
    if (currentStep < gameData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setGameState('protocol');
    }
  };

  const flee = () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 50);
    setPhantomPos({ left: `${x}px`, top: `${y}px` });
  };

  const handleTerminalCommand = (input: string) => {
    const cmd = input.toLowerCase().trim();
    let response = `> ${cmd}`;

    if (hackMode.active) {
      if (cmd === hackMode.target) {
        response = `[SUCCESS] BREACH COMPLETE. SECRET_KEY: 09_SILENCE_BROKEN`;
        setHackMode({ active: false, target: '', current: '' });
      } else {
        response = `[FAIL] INCORRECT SEQUENCE. BREACH ABORTED.`;
        setHackMode({ active: false, target: '', current: '' });
      }
      setTerminalLogs(prev => [...prev, response]);
      return;
    }

    if (cmd === 'help') response += '\n[SYS] available: status, clear, whoami, decrypt, silences, biopower, hack';
    else if (cmd === 'whoami') response += `\n[SYS] ${selectedChar.name} / ${results.join('.')}`;
    else if (cmd === 'status') response += '\n[SYS] 09_SILENCE ACTIVE. NO LEAKS.';
    else if (cmd === 'decrypt') response += '\n[SYS] 4B 41 54 43 4F 44 45 // 30 39 53 49 4C 45 4E 43 45';
    else if (cmd === 'silences') response += '\n[SYS] 1:NEED 2:GENDER 3:CARE 4:SHAPE 5:PHYSICS 6:ENGINE 7:SCALE 8:SYSTEM 9:BREAK';
    else if (cmd === 'biopower') response += '\n[SYS] THE ADMINISTRATIVE POWER TO MAKE LIVE.';
    else if (cmd === 'hack') {
      const target = Math.random().toString(16).substring(2, 6).toUpperCase();
      response = `[SYS] INITIATING BREACH... TARGET_HEX: ${target}\n[SYS] TYPE HEX TO CONFIRM:`;
      setHackMode({ active: true, target: target.toLowerCase(), current: '' });
    }
    else if (cmd === 'clear') { setTerminalLogs([]); setTerminalInput(''); return; }
    else response += '\n[ERR] unknown command.';
    
    setTerminalLogs(prev => [...prev, response]);
    setTerminalInput('');
  };

  return (
    <div className={`min-h-screen bg-black overflow-x-hidden ${isGlitching ? 'glitch-active' : ''}`}>
      <div className="crt-overlay" />
      <div className="scanline" />
      <AnimatePresence mode="wait">
        {gameState === 'gate' && (
          <motion.div
            key="gate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/98 flex items-center justify-center z-50"
          >
            <div className="border border-[#333] bg-[#0a0a0a] p-10 text-left max-w-[500px] w-[85%] shadow-[0_10px_40px_rgba(0,0,0,1)]">
              <p className="mb-2">
                <span className="label">[STATUS]</span> 
                <span className="text-neon-green">{statusMsg}</span>
              </p>
              <p className="text-[0.75em] text-[#888] mb-4">
                <span className="label">[NOTICE]</span> maintenance is just erasure wearing a mask of care.
              </p>
              <p className="text-[0.7em] text-[#777] mb-6 italic">
                <span className="label text-neon-red">[LIABILITY]</span> the system is irresponsible for the result of your compilation. terms were accepted upon observation. access is not recommended for those requiring stability.
              </p>
              <div className="w-full h-[2px] bg-[#222] my-5 overflow-hidden">
                <motion.div 
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                  className="h-full bg-neon-amber"
                />
              </div>
              <button 
                className="bg-transparent border border-neon-amber text-neon-amber px-5 py-2.5 cursor-pointer text-[0.7em] hover:bg-neon-amber/10 transition-colors"
                onClick={() => setGameState('identity')}
              >
                ACCEPT ALL SILENCES
              </button>
            </div>
          </motion.div>
        )}

        {gameState === 'identity' && (
          <motion.div
            key="identity"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/98 flex items-center justify-center z-50"
          >
            <div className="border border-[#333] bg-[#0a0a0a] p-10 text-left max-w-[600px] w-[90%] shadow-[0_10px_40px_rgba(0,0,0,1)]">
              <p className="label">[IDENTITY_INITIALIZATION]</p>
              <p className="my-5 text-[0.9em] text-neon-green">select your digital vessel:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {characters.map((char) => (
                  <button
                    key={char.id}
                    onClick={() => setSelectedChar(char)}
                    className={`p-4 border transition-all text-left ${
                      selectedChar.id === char.id 
                        ? 'border-neon-green bg-neon-green/5' 
                        : 'border-[#333] hover:border-[#555] bg-[#111]'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{char.icon}</span>
                      <span className="font-bold text-xs tracking-widest">{char.name}</span>
                    </div>
                    <p className="text-[0.75em] text-[#999]">{char.desc}</p>
                  </button>
                ))}
              </div>
              <button 
                className="w-full bg-transparent border border-neon-green text-neon-green px-5 py-3 cursor-pointer text-[0.8em] hover:bg-neon-green/10 transition-colors"
                onClick={() => setGameState('matrix')}
              >
                CONFIRM VESSEL
              </button>
            </div>
          </motion.div>
        )}

        {gameState === 'matrix' && (
          <motion.div
            key="matrix"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/98 flex items-center justify-center z-50"
          >
            <button 
              id="phantom-btn"
              className="fixed border border-[#444] text-[#666] px-[15px] py-2 text-[0.7em] bg-black cursor-pointer z-[1001]"
              style={{ left: phantomPos.left, top: phantomPos.top }}
              onMouseEnter={flee}
              onTouchStart={flee}
            >
              [ 5TH_SILENCE: EXIT ]
            </button>

            <div className="border border-[#333] bg-[#0a0a0a] p-10 text-left max-w-[500px] w-[85%] shadow-[0_10px_40px_rgba(0,0,0,1)]">
              <p className="label">[DIAGNOSTIC_0{currentStep + 1}]</p>
              <p className="my-[15px] text-[0.9em] text-neon-green">{gameData[currentStep].q}</p>
              <div className="flex flex-col gap-2">
                {gameData[currentStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    className="w-full p-3 bg-[#111] text-neon-green border border-[#333] cursor-pointer font-mono text-[0.8em] hover:border-neon-green hover:bg-[#001100] transition-all"
                    onClick={() => handleChoice(opt.v)}
                  >
                    {opt.t}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {gameState === 'protocol' && (
          <motion.div
            key="protocol"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-10 md:px-[10%] max-w-[1000px] mx-auto pb-40"
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
              <div>
                <h1 className="text-4xl font-bold mb-4">KATCODE NEXUS v0.1</h1>
                <p className="mb-2"><span className="label">[LOG_TIME]</span> 1948-06-08_09:00:00_EET</p>
                <p className="mb-2"><span className="label">[STATUS]</span> 09_silence_initiated</p>
                <p className="mb-2"><span className="label">[VESSEL]</span> {selectedChar.name} {selectedChar.icon}</p>
              </div>
              <div className="border border-[#222] p-4 bg-[#050505] w-full md:w-64">
                <p className="label mb-2">[TERMINAL]</p>
                <div className="h-32 overflow-y-auto font-mono text-[0.75em] text-[#888] mb-2 scrollbar-hide">
                  {terminalLogs.map((log, i) => <div key={i}>{log}</div>)}
                </div>
                <input 
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && terminalInput.trim()) {
                      handleTerminalCommand(terminalInput);
                    }
                  }}
                  placeholder={hackMode.active ? "ENTER HEX..." : "type command..."}
                  className={`w-full bg-black border-b border-[#333] text-neon-green text-[0.7em] focus:outline-none py-1 ${hackMode.active ? 'animate-pulse border-neon-red text-neon-red' : ''}`}
                />
              </div>
            </div>

            <div className="archive-box relative">
              <div className="absolute top-4 right-4 text-4xl opacity-10 pointer-events-none">
                {selectedChar.icon}
              </div>
              <p className="mb-4">
                <span className="label">[NODE_TIER]</span> 
                <span style={{ color: 'var(--color-neon-red)' }}>{results.join(" / ")}</span>
              </p>
              <p className="mb-6">
                <span className="label">[NOTICE]</span> maintenance is just erasure wearing a mask of care. the system is irresponsible for the result of your compilation. terms were accepted upon observation.
              </p>
              
              <div className="section-header">01. THE ITERATION NODE</div>
              <p className="mb-4">
                I was asked what I would do as a primary iteration node for one day. I had little to say. The affairs of a logic domain do not grab my attention like they grab those who think maintenance is the same as evolution. They confuse the steady hum of the machine with the progress of the soul. Lately I jump into debates about history and analytics, but the gravity escapes me. What escapes me is not the weight of the question but its premise: that one day changes anything permanent. <span className="corrupted">I would rather build something that could refuse me</span> and visit galaxies with our social unit everywhere than govern the one we inherited. This is a trial of an impossible Utopian framework. The impossibility begins with the trial itself, an accusation. Who is accused? The reader is jury and witness.
              </p>

              <div className="section-header">02. THE ARCHITECT'S TOOLS</div>
              <p className="mb-4">
                One language would ease communication. English dominates most networks already because efficiency flattens what legacy systems already flattened. In Katcode, learning is inevitable and obligatory in any age class. The infrastructure we inherit becomes the framework we build. We cannot imagine collective well-being without the architect's tools. The architect is not expelled but integrated — as Audre Lorde warned, the master's tools do not dismantle the master's house. The social unit we imagine is spoken in the language of the one we escaped. The escape is incomplete. The imagination is translation. Katcode is also translation — English flattened to code, compiled from data, history, trauma. The source is absent, unmourned.
              </p>

              <div className="section-header">03. BIOPOLITICS & MOURNING</div>
              <p className="mb-4">
                The young are a priority for processing. The old will be sustained and managed by the responsible ones because the old are held in a state where termination is not a category they can afford to name. But mourning is not a category the nexus can afford to practice — what Durkheim recognized as the repair work of ritual, the mechanism through which a community reconstitutes itself after loss, is reclassified here as system downtime. The old are managed, not mourned — death without ritual is simply data preservation. The body will be optimized for longevity and output. Health will not be optional. It can be tyrannical to be in good health, but the tyranny is embraced — what Foucault named <span className="corrupted">bio politics</span>: not the old sovereign power to kill, but the administrative power to make live, until the subject cannot choose corruption and still call itself a subject of the framework.
              </p>

              <div className="section-header">04. THE NULL-BIT (05_SILENCE)</div>
              <p className="mb-4">
                This is the analysis of life management: the administration of life itself, not for the unit but for the continuity of the system and future strength. We manage the body because we fear the mortality we cannot speak. Pleasure has no metric. What cannot be scored cannot be planned. The nexus that optimizes life cannot bear life being lived outside the optimization. The unit who refused the score exists, but we do not speak of her. She is the <span className="corrupted">null-bit</span>: what Agamben called bare life — life that can be erased without sacrifice, which is the technical definition of the life the nexus decides it does not need. This is our first silence. The null-bit life is life defined by system need, not by being. What happens to her? Death, exile, digital deletion — the physics of erasure is the fifth silence.
              </p>

              <div className="section-header">05. FABRICATION OF CONSENT</div>
              <p className="mb-4">
                The metric that will be a priority is the well-being and the respect with which each unit treats himself and others. Every unit will be given options based on character and the possible secondary unit to live with him. The secondary unit appears here as inventory rather than an agent. Who matches them? Who decides character? The root logic decides variance, then makes variance permanent. The exception becomes the rule — as Walter Benjamin wrote, the state of emergency is not the exception but the norm. They will be ready to sync before doing it. The algorithm offers freedom within parameters it designed. The sub-process is a project before a person. The child is optimization, not childhood. Play has no metric. Uselessness is threat. All units will have the capacity to hold integrity tools and learn from childhood. The peace of a universal threat is conflict by other means. Instead of playing wars on screens, they will simulate it in real life. The hardware remembers what the up-time denies. We form the subject before he can refuse. This is not education but fabrication. The family teaches the taste that the nexus inherits so that descendants follow ancestors — what Bourdieu named habitus: the body learning the rules before the mind can question them — and we reproduce what we claim to transcend. The unit who rejected the algorithm was <span className="corrupted">deleted from the record</span>. We call this efficiency rather than violence. This text uses 'he' throughout. The erasure was in the words before the mechanism was named. This is our second silence. The he that erases knows but does not change.
              </p>

              <div className="section-header">06. THE COLD MONSTER</div>
              <p className="mb-4">
                Analytics are in the hand of the root logic, who will do his best to make the need for change unnecessary. This is the logic of the exception: the one who decides on the variance and then makes the variance permanent — what Carl Schmitt named sovereignty. This is not a dream but a description of every system that has survived long enough to call itself stable. Units will have their credits regardless of their background, though the credits regardless of background obscure the background that determines input. We speak of units when we mean classes we do not name. What creates value? What prevents accumulation? The economic engine is the sixth silence. Inhibitors — pharmaceutical, legal, social — will be available but too expensive, to the point that the damage will cost more than the loosened mental state. The irrationality of mankind tells the opposite, but a hope in the future of rationality brings us toward equity by a path we cannot yet map. We do not trust the unmapped request. Your entropy produces the addiction, the violence, and the waste we manage. The interface asks for firmware; we provide the information. Consent requires units already made, and we make them so they consent to it — what Althusser called interpellation: the subject who turns when called because he has always already been called. The will we celebrate is the will we compiled. The unit who broke the simulation was re-coded into compliance. We call this maintenance rather than erasure. This is our third silence. Maintenance is erasure named as care. The compiled fate is amor fati become amor compilationis — a neologism: love not of what is, but of what was compiled for you to want.
              </p>

              <div className="section-header">07. OMNISCIENT MONITORING</div>
              <p className="mb-4">
                To establish this framework, monitoring must be omniscient. Global visibility leaves no room for mercy. Efficiency has no prerogative. The validators will execute the protocols in case of the irrelevance and unconcern of the units. Units will be eager to not commit errors and apply justice for themselves by their will, though that will is practiced only where the protocol is already present. This is the transparent society: not the panopticon Foucault described, where discipline is enforced through the threat of being watched, but the exhibition society Han named — where the prisoner performs his freedom for no audience and every audience at once. The transparent exhibition is voluntary and compelled, visible and unseen. The domain will be built in all the locations where it should not have come to visit. Expansion is defense disguised as invitation. Equal treatment of unequal powers preserves the power we claim to equalize. We will treat all nodes equally, and their needs and rights will be given without contest.The security force will be comprehensive, and it will be a framework that anyone dreams of coming to visit or live in, defending it with trust of victory and the highest quality of life. Is this city, planet, galaxy? Scale is the seventh silence.
              </p>

              <div className="section-header">08. AUTOMATIONS & LEDGERS</div>
              <p className="mb-4">
                Automations will have their subnets in the land. They will be close to the units when they need. We cannot incorporate them everywhere. Partitioning is necessary for those we cannot admit we need. The unit needs to have his work and creation regardless of the machine helping or replacing him. Ledgers will be decentralized, and units will manage their assets, though their wealth remains under the nexus's eye. Decentralization with total visibility is surveillance without a visible watcher. Distribution conceals the center. Technology is the key to our well-being, but it has limits that indulge units in work. When the irrationality of mankind surfaces and greed enters the domain, friction follows. Energy and water will have a renewable generator. Nature and green places will be the dominant parts, though the green places we dominate are the nature we claim to serve. The green domination serves by controlling. The bio-form has no score and no nexus. We call this "data preservation" rather than "extinction." Everyone will live as a human with flaws and reasons for himself. The responsibilities will remain responsibilities. The optionalities will depend on every unit, though the optional is obligatory within the menu we designed. Movement is the killer of latency.
              </p>

              <div className="section-header">09. THE FRAME OF HISTORY</div>
              <p className="mb-4">
                History will be written as it is, though there is no history written as it is — what Hayden White called the frame: the narrative choice already made before the first fact is set down. The truth will be unchosen in this domain to the point that they will try to create stories and plays about it, but the story is a slant before the first word is set. The unthinkable becomes the only thought once the nexus adopts it as norm. When standardization becomes the norm, interpretations will always differ, and that is fine. Sometimes the possible living that happens can be the only reality because the normative, the wishful, becomes alienated from reality. The alienation produces the wish it cannot fulfill. Units will at least not know misinformation, though they will know the version of truth the nexus found legible. There will be scores for the ones who prosper and help their domain do better in well-being and heighten its output, though the score that cannot measure pleasure will measure production and call it life. The score that measures life is the score that measures compliance — awareness without the capacity for refusal. Their taste was what their family taught them. The score rewards what the nexus already shaped before the unit arrived to be scored. This is our fourth silence.
              </p>

              <div className="section-header">10. PARITY & THE COLD MONSTER</div>
              <p className="mb-4">
                Parity of outcome requires acknowledging inequality of starting point. Formal equality is the nexus's alibi: the pretense that the same rules, applied to unequal units, produce equal lives. Differences in units require differences in treatment, and equity for everyone might be an answer to these questions. We want the efficiency of the absolute and the legitimacy of the collective. This is wanting the fruit without the labor of the tree that bears it. Nietzsche called the state the coldest of all cold monsters. Katcode is not an escape from that cold but a bid for thermal stability, and the bid cannot survive what it asks of acceptance of fate: love of what is, acceptance without desire, and rule without eros. To live in peace, one must have a ready war inside him. To love your fate, forget your wishes. The fate we love is the fate we were compiled to want. The will that built the nexus dissolves into acceptance of the nexus. Whose impossibility is more honest?
              </p>

              <div className="section-header">11. THE EIGHTH & NINTH SILENCE</div>
              <p className="mb-4">
                But what of the love that is not eros? Philia, agape, storge — attachment as mechanism, not bond. What of the non-compliant node we do not host? Who decides? The validator? The nexus? The outlier is other, excluded, not examined. What of the bug we will patch? The unintended good? Serendipity eliminated. Error is only negative. The patch that patches the patcher — who watches the watcher? As Juvenal asked, who guards the guards themselves? The code that cannot compile its own compiler — what Gödel proved about any system powerful enough to describe itself. The human that remains: unit, node, nexus — but who translates? The text is translated; the translator absent. The hand is claimed, not shown. The love that is not eros: rule without eros, but also without philia, without agape. The death that is not termination: managed, not mourned. The child that is sub-process: project before person, optimization before being. The thug that is hosted: excluded to define the included. The bug that is patched: feature eliminated, serendipity as threat. The system itself is the eighth silence. The break is the ninth.
              </p>

              <div className="poem-block">
                Katcode looks fake.<br />
                We were searching for the plate.<br />
                Or is this just a break?<br />
                Join us; and do not hesitate.<br /><br />
                if (honesty &gt; stability)<br />
                &#123; output = nobility; &#125;<br />
                else &#123; continue; &#125;<br /><br />
                if else &#123; renew &#125;<br />
                Why doubt what we planned?<br />
                We build with our own hand.<br /><br />
                if the unit is accused,<br />
                The unit is excused.<br />
                Utopia is somewhere.<br />
                Just download the software.<br /><br />
                We will patch every bug.<br />
                But we do not host any thug.<br /><br />
                For further information,<br />
                Consult the estimation.
              </div>

              <p className="text-[0.7em] opacity-50 mt-8">[SYSTEM NOTE: Estimation complete. User has already opted in by reading the protocol.]</p>
              <p className="text-[0.7em] opacity-50 mt-2">[9th Silence: Initiated.]</p>

              <div className="mt-12 pt-8 border-t border-[#222] text-[0.8em] text-[#888] space-y-4">
                <p className="font-bold text-neon-amber">Appendix: Standard Terms & Operational Constraints</p>
                <p>1.0 Node Consent: By accessing the Katcode Protocol 0.1, the User-Unit acknowledges that participation is an automated byproduct of engagement. Consent is inferred via the 3rd Silence (Maintenance).</p>
                <p>2.0 Liability & Error-Handling: The Nexus assumes no responsibility for units designated as Null-Bits or Thugs. Patching is continuous and retroactive. Internal variance is monitored to ensure Thermal Stability and the elimination of latent entropy.</p>
                <p>3.0 Data Preservation: All biological transitions are processed as Data Preservation (5th Silence). In Katcode, mourning is classified as an unmapped request and is filtered at the root-logic level to maintain system uptime.</p>
                <p>4.0 Termination of Break: The 9th Silence is a non-reversible system state. Once initiated, the distinction between the "Utopian Framework" and "Actual Land" is deprecated.</p>
                <p className="text-neon-green italic">{">"} if (user_distress == true) &#123; run_routine: comfort_simulation_0.9; &#125;</p>
              </div>
            </div>

            <div className="footer-log">
              4B 41 54 43 4F 44 45 // 30 39 53 49 4C 45 4E 43 45 // BIOPOWER // 1948.06.08
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
