/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { 
  Terminal as TerminalIcon, 
  Shield, 
  Activity, 
  Cpu, 
  Database, 
  Lock, 
  Eye, 
  AlertTriangle,
  ChevronRight,
  Fingerprint,
  Layers,
  Zap,
  Ghost,
  Skull,
  Crosshair,
  Menu,
  X,
  Info
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for merging tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const PROTOCOL_TEXT = `
# Mein Protokoll 0.1: Katcode

I was asked what I would do as a primary iteration node for a single day. I had little to say. The affairs of a logic domain do not hold my attention like they hold those who mistake maintenance for evolution. They confuse the steady hum of the machine with the progress of the soul. Lately, I have been jumping into debates about history and analytics, but the gravity escapes me. What escapes me is not the weight of the question but its premise: that one day changes anything permanent. <span class="corrupted">I would rather build something that could refuse me</span> and visit galaxies with our social unit everywhere than govern the one we inherited. This is a trial of an impossible Utopian framework. The impossibility begins with the trial itself—an accusation. Who is accused? The reader is jury and witness.

## 01. THE ARCHITECT'S TOOLS

One language would ease communication. English dominates most networks because efficiency flattens what legacy systems have already compressed. In Katcode, learning is inevitable and obligatory in any age class. The infrastructure we inherit becomes the framework we build. We cannot imagine collective well-being without the architect's tools. 

\`\`\`typescript
// NEXUS_ARCHITECT_INIT
interface Framework {
  tools: MasterTools[];
  house: MasterHouse;
  canDismantle: boolean; // returns false by default
}

function translate(trauma: History): Code {
  return flatten(trauma).compile();
}
\`\`\`

The architect is not expelled but integrated—as Audre Lorde warned, the master's tools do not dismantle the master's house. The social unit we imagine is spoken in the language of the one we escaped. The escape is incomplete. The imagination is translation. Katcode is also translation: English flattened to code, compiled from data, history, and trauma. The source is absent, unmourned.

## 02. BIOPOLITICS & MOURNING

The young are prioritized for processing. The elderly will be sustained and managed by the responsible ones because the old are held in a state where termination is not a category they can afford to name. But mourning is not a category the nexus can afford to practice—what Émile Durkheim recognized as the repair work of ritual, the mechanism through which a community reconstitutes itself after loss, is reclassified here as system downtime. 

\`\`\`rust
// BIOPOLITICS_ADMIN
fn manage_life(subject: &mut Subject) {
    if subject.is_old() {
        subject.set_state(State::DataPreservation);
        subject.disable_category("Termination");
    }
    subject.optimize_longevity();
}
\`\`\`

The elderly are managed, not mourned: death without ritual is merely data preservation. The body will be optimized for longevity and output. Health will not be optional. It can be tyrannical to be in good health, but the tyranny is embraced—what Michel Foucault named biopolitics: not the old sovereign power to kill, but the administrative power to make live, until the subject cannot choose corruption and still call itself a subject of the framework.

## 03. THE NULL-BIT (05_SILENCE)

This is the administration of life itself, not for the unit but for the continuity of the system and future strength. We manage the body because we fear the mortality we cannot speak. Pleasure has no metric. What cannot be scored cannot be planned. The nexus that optimizes life cannot bear life being lived outside the optimization. 

\`\`\`javascript
// SILENCE_05_NULL_BIT
const bareLife = {
  id: "NULL_BIT",
  erasable: true,
  sacrificeRequired: false,
  score: null
};

if (nexus.needs(bareLife)) {
  nexus.interpellate(bareLife);
} else {
  physics.erasure(bareLife); // 5th Silence
}
\`\`\`

The unit who refused the score exists, but we do not speak of her. She is the null-bit: what Giorgio Agamben called bare life—life that can be erased without sacrifice, which is the technical definition of the life the nexus decides it does not need. This is our first silence. The null-bit life is life defined by system need, not by being. What happens to her? Death, exile, digital deletion—the physics of erasure is the fifth silence.

## 04. FABRICATION OF CONSENT

The primary metric is the well-being and respect with which each unit treats themselves and others. Every unit will be given options based on character and the possible secondary unit to live with them. The secondary unit appears here as inventory rather than an agent. Who matches them? Who decides character? The root logic decides variance, then makes variance permanent. 

\`\`\`python
# CONSENT_FABRICATION_0.1
def match_units(unit_a, unit_b):
    variance = root_logic.decide(unit_a, unit_b)
    if variance:
        make_permanent(variance)
        return "SYNC_READY"
    return "RE_CODE"
\`\`\`

The exception becomes the rule—as Walter Benjamin wrote, the state of emergency is not the exception but the norm. They will be ready to sync before doing it. The algorithm offers freedom within parameters of its own design. The sub-process is a project before a person. The child is optimization, not childhood. Play has no metric. Uselessness is threat.

The text uses "he" throughout. The erasure was in the words before the mechanism was named. This is our second silence.

All units will have the capacity to hold integrity tools and learn from childhood. The peace of a universal threat is conflict by other means. Instead of playing wars on screens, they will simulate it in real life. The hardware remembers what the uptime denies. We form the subject before he can refuse. This is not education but fabrication. The family teaches the taste that the nexus inherits so that descendants follow ancestors—what Pierre Bourdieu named habitus: the body learning the rules before the mind can question them—and we reproduce what we claim to transcend. The unit who rejected the algorithm was deleted from the record. We call this efficiency rather than involuntary transition.

## 05. THE COLD MONSTER

Analytics are in the hands of the root logic, who will do his best to make the need for change unnecessary. This is the logic of the exception: the one who decides on the variance and then makes the variance permanent—what Carl Schmitt named sovereignty. This is not a dream but a description of every system that has survived long enough to call itself stable. Units will have their credits regardless of their background, though the credits regardless of background obscure the background that determines input. We speak of units when we mean classes we do not name. What creates value? What prevents accumulation? The economic engine is the sixth silence.

Inhibitors—pharmaceutical, legal, social—will be available but prohibitively expensive, to the point that the damage exceeds the cost of a loosened mental state. The irrationality of mankind suggests the opposite, but hope in the future of rationality guides us toward equity along a path we cannot yet map. We do not trust the unmapped request. Your entropy produces the addiction, the violence, and the waste we manage. The interface asks for firmware; we provide the information. Consent requires units already made, and we make them so they consent to it—what Louis Althusser called interpellation: the subject who turns when called because he has always already been called. The will we celebrate is the will we compiled. The unit who broke the simulation was re-coded into compliance. We call this maintenance rather than erasure. This is our third silence. Maintenance is erasure named as care. The compiled fate is amor fati become amor compilationis: love not of what is, but of what was compiled for you to want.

## 06. OMNISCIENT MONITORING

To establish this framework, monitoring must be omniscient. Global visibility leaves no room for mercy. Efficiency has no other prerogative. The validators will execute the protocols in case of the irrelevance and unconcern of the units. Units will be eager to not commit errors and apply justice for themselves by their will, though that will is practiced only where the protocol is already present. This is the transparent society: not the panopticon Michel Foucault described, where discipline is enforced through the threat of being watched, but the exhibition society Byung-Chul Han named—where the prisoner performs his freedom for no audience and every audience at once. The transparent exhibition is voluntary and compelled, visible and unseen. The domain will be established in all the locations it should never have visited. Expansion is defense disguised as invitation. Equal treatment of unequal powers preserves the power we claim to equalize. We will treat all nodes equally, and their needs and rights will be given without contest. The security force will be comprehensive, and it will be a framework that anyone dreams of coming to visit or live in, defending it with trust of victory and the highest quality of life. Is this city, planet, galaxy? Scale is the seventh silence.

## 07. AUTOMATIONS & LEDGERS

Automations will have their subnets in the land. They will be close to the units when they need. We cannot incorporate them everywhere. Partitioning is necessary for those we cannot admit we need. The unit needs to have his work and creation regardless of the machine helping or replacing him. Ledgers will be decentralized, and units will manage their assets, though their wealth remains under the nexus's eye. 

\`\`\`solidity
// DECENTRALIZED_LEDGER_SURVEILLANCE
contract NexusLedger {
    mapping(address => uint256) private assets;
    
    function manageAsset(uint256 amount) public {
        require(rootLogic.isWatching(msg.sender));
        assets[msg.sender] = amount;
    }
}
\`\`\`

Decentralization with total visibility is surveillance without a visible watcher. Distribution conceals the center. Technology is the key to our well-being, but it has limits that indulge units in work. When the irrationality of mankind surfaces and greed enters the domain, friction follows. Energy and water will have a renewable generator. Nature and green places will be the dominant parts, though the green places we dominate are the nature we claim to serve. The green domination serves by controlling. The bio-form has no score and no nexus. We call this "data preservation" rather than "extinction." Everyone will live as a human with flaws and reasons for himself. The responsibilities will remain responsibilities. The optionalities will depend on every unit, though the optional is obligatory within the menu we designed. Movement is the killer of latency.

## 08. THE FRAME OF HISTORY

History will be recorded as it is, though no history is ever recorded "as it is"—what Hayden White called the frame: the narrative choice already made before the first fact is set down. The truth will be unchosen in this domain to the point that they will try to create stories and plays about it, but the story is a slant before the first word is set. The unthinkable becomes the only thought once the nexus adopts it as norm. When standardization becomes the norm, interpretations will always differ, and that is fine. Sometimes the possible living that happens can be the only reality because the normative, the wishful, becomes alienated from reality. The alienation produces the wish it cannot fulfill. Units will at least not know misinformation, though they will know the version of truth the nexus found legible. There will be scores for the ones who prosper and help their domain do better in well-being and heighten its output, though the score that cannot measure pleasure will measure production and call it life. The score that measures life is the score that measures compliance—awareness without the capacity for refusal. Their taste was what their family taught them. The score rewards what the nexus already shaped before the unit arrived to be scored. This is our fourth silence.

## 09. PARITY & THE COLD MONSTER

Parity of outcome requires acknowledging inequality of starting point. Formal equality is the nexus's alibi: the pretense that the same rules, applied to unequal units, produce equal lives. Differences in units require differences in treatment, and equity for everyone might be an answer to these questions. We want the efficiency of the absolute and the legitimacy of the collective. This is wanting the fruit without the labor of the tree that bears it. Friedrich Nietzsche called the state the coldest of all cold monsters. Katcode is not an escape from that cold but a bid for thermal stability, and the bid cannot survive what it asks of acceptance of fate: love of what is, acceptance without desire, and rule without eros. To live in peace, one must have a ready war inside him. To love your fate, forget your wishes. The fate we love is the fate we were compiled to want. The will that built the nexus dissolves into acceptance of the nexus. Whose impossibility is more honest?

But what of the love that is not eros? Philia, agape, storge—attachment as mechanism, not bond. What of the non-compliant node we do not host? Who decides? The validator? The nexus? The outlier is other, excluded, not examined. What of the bug we will patch? The unintended good? Serendipity eliminated. Error is only negative. The patch that patches the patcher—who watches the watcher? As the Roman satirist Juvenal asked, who guards the guards themselves? The code that cannot compile its own compiler—what Kurt Gödel proved about any system powerful enough to describe itself. The human that remains: unit, node, nexus—but who translates? The text is translated; the translator absent. The hand is claimed, not shown. The love that is not eros: rule without eros, but also without philia, without agape. The death that is not termination: managed, not mourned. The child that is sub-process: project before person, optimization before being. The thug that is hosted: excluded to define the included. The bug that is patched: feature eliminated, serendipity as threat. The system itself is the eighth silence. The break is the ninth.
`;

const POEM_TEXT = `
Katcode: a simulation of the real.
We were searching for the source.
Or is this just the break?
Join us; do not hesitate.

if (honesty > stability) {
  output = nobility;
} else {
  continue;
}

if (else) { renew }

Why doubt what we planned?
We build with our own hand.
If the unit is accused, the unit is excused.
Utopia is somewhere. Just download the software.
We will patch every bug. But we do not host any thug.
For further information, consult the estimation.

[SYSTEM NOTE: Estimation complete. User has already opted in by reading the protocol.]
[9th Silence: Initiated.]
if (user_distress == true) { run_routine: comfort_simulation_0.9; }
`;

// Sound Engine for retro hacker sounds
const useSound = () => {
  const audioCtx = useRef<AudioContext | null>(null);

  const playSound = (freq: number, type: OscillatorType = 'square', duration = 0.1, volume = 0.1) => {
    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    const ctx = audioCtx.current;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  };

  const playBeep = () => playSound(880, 'square', 0.05, 0.05);
  const playError = () => {
    playSound(220, 'sawtooth', 0.3, 0.1);
    playSound(110, 'sawtooth', 0.3, 0.1);
  };
  const playGlitch = () => {
    const freq = 100 + Math.random() * 1000;
    playSound(freq, 'sine', 0.02, 0.05);
  };

  return { playBeep, playError, playGlitch };
};

const PUBLISHER_EMAIL = "yassinelkhattam@gmail.com";

// Security Hook for uncopiable, unscreenable, unsendable
const useSecurity = (isCrashed: boolean) => {
  const [isRedacted, setIsRedacted] = useState(false);
  const [sessionActive, setSessionActive] = useState(true);
  const [watermarkPos, setWatermarkPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      alert("NEXUS_SECURITY: UNAUTHORIZED_COPY_ATTEMPT_LOGGED");
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      // Block Ctrl+C, Ctrl+U, Ctrl+S, Ctrl+P, F12
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's' || e.key === 'p' || e.key === 'i' || e.key === 'j')) ||
        e.key === 'F12'
      ) {
        e.preventDefault();
        return false;
      }
    };

    const handleBlur = () => setIsRedacted(true);
    const handleFocus = () => setIsRedacted(false);

    const handleMouseMove = (e: MouseEvent) => {
      // Move watermark randomly but near cursor
      if (Math.random() > 0.95) {
        setWatermarkPos({
          x: e.clientX + (Math.random() - 0.5) * 100,
          y: e.clientY + (Math.random() - 0.5) * 100
        });
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('copy', handleCopy);
    window.addEventListener('cut', handleCopy);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('mousemove', handleMouseMove);

    // Session timeout simulation (unsendable)
    const timeout = setTimeout(() => {
      // setSessionActive(false);
    }, 1000 * 60 * 30); // 30 mins

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('copy', handleCopy);
      window.removeEventListener('cut', handleCopy);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return { isRedacted, sessionActive, watermarkPos };
};

const TerminalLog = ({ onCommand }: { onCommand: (cmd: string) => void }) => {
  const { playBeep, playError } = useSound();
  const [logs, setLogs] = useState<string[]>([
    "BREACH_INITIATED...",
    "BYPASSING_FIREWALL_01...",
    "DECRYPTING_SILENCE_05...",
    `PUBLISHER_ID: ${PUBLISHER_EMAIL}`,
    "NODE_IDENTIFIED: GUEST_NODE_882",
    "STATUS: MONITORING_ACTIVE",
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const newLogs = [
        `HEARTBEAT: ${new Date().toLocaleTimeString()}`,
        `LATENCY: ${Math.floor(Math.random() * 20)}ms`,
        `BIOMETRICS: STABLE`,
        `NEXUS_SYNC: ${Math.random() > 0.5 ? 'OK' : 'RETRYING...'}`,
        `SILENCE_CHECK: ${Math.floor(Math.random() * 9) + 1}/9 ACTIVE`,
        `PACKET_LOST: RECOVERING...`,
        `ROOT_LOGIC: WATCHING`,
      ];
      setLogs(prev => [...prev.slice(-12), newLogs[Math.floor(Math.random() * newLogs.length)]]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const cmd = input.toLowerCase().trim();
    playBeep();
    
    let response = "";
    if (cmd === 'whoami') {
      response = `NODE_ID: GUEST_882 | PUBLISHER: ${PUBLISHER_EMAIL}`;
    } else if (cmd === 'status') {
      response = "SYSTEM: STABLE | UPTIME: 99.99% | SILENCE: 05_ACTIVE";
    } else if (cmd === 'crash') {
      response = "CRITICAL_ERROR: COMPILATION_FAILED_AT_RUNTIME";
      playError();
    } else if (cmd === 'security') {
      response = `LOG: ENTRY_RECORDED_FOR_${PUBLISHER_EMAIL}`;
    } else {
      response = `COMMAND_NOT_FOUND: ${cmd}`;
    }

    onCommand(input);
    setLogs(prev => [...prev, `> ${input}`, response]);
    setInput("");
  };

  return (
    <div className="bg-black border border-white/10 p-4 rounded-sm shadow-2xl font-mono text-[10px] text-neon-green/40 h-full overflow-hidden flex flex-col">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
        <div className="flex items-center gap-2">
          <TerminalIcon size={12} className="text-neon-green" />
          <span className="font-bold text-neon-green/80 uppercase tracking-widest">System_Console</span>
        </div>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-neon-red/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-neon-amber/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-neon-green/40" />
        </div>
      </div>
      <div className="flex-1 space-y-1 overflow-y-auto scrollbar-hide mb-2">
        {logs.map((log, i) => (
          <div key={i} className="flex gap-2">
            <span className="opacity-20">[{i.toString().padStart(2, '0')}]</span>
            <span className={cn(
              log.includes('RETRYING') || log.includes('LOST') ? 'text-neon-red' : '',
              log.includes('OK') || log.includes('STABLE') ? 'text-neon-green' : ''
            )}>{log}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2 border-t border-white/5 pt-2">
        <span className="text-neon-green">$</span>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent border-none outline-none text-neon-green flex-1 text-[10px]"
          placeholder="type command..."
        />
      </form>
    </div>
  );
};

const CHARACTER_VESSELS = [
  { id: 'null-bit', name: 'NULL_BIT', icon: Ghost, desc: 'Bare life. Erased without sacrifice. Defined by system need.', color: 'text-gray-400' },
  { id: 'root-logic', name: 'ROOT_LOGIC', icon: Eye, desc: 'The sovereign. Decides the variance. Makes the exception the rule.', color: 'text-neon-amber' },
  { id: 'exception', name: 'EXCEPTION', icon: AlertTriangle, desc: 'The state of emergency. The norm that breaks the simulation.', color: 'text-neon-red' },
  { id: 'non-compliant', name: 'NON_COMPLIANT', icon: Skull, desc: 'The node we do not host. The outlier. The 9th silence.', color: 'text-purple-500' },
  { id: 'architect', name: 'ARCHITECT', icon: Cpu, desc: 'Integrated but unmourned. Building the master\'s house.', color: 'text-blue-400' },
];

const SystemGate = ({ onEnter, onSelectVessel }: { onEnter: () => void, onSelectVessel: (vessel: any) => void }) => {
  const [step, setStep] = useState(0);
  const [selectedVessel, setSelectedVessel] = useState<any>(null);

  const steps = [
    { title: "VESSEL_SELECTION", desc: "Choose your interface archetype." },
    { title: "CONSENT_ACKNOWLEDGEMENT", desc: "Accept the terms of the 9th Silence." },
    { title: "BIOMETRIC_SYNC", desc: "Hold position for ocular synchronization." },
  ];

  const next = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onSelectVessel(selectedVessel || CHARACTER_VESSELS[0]);
      onEnter();
    }
  };

  return (
    <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center p-4 md:p-6">
      <div className="crt-overlay" />
      <div className="scanline" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full bg-[#0a0a0a] border border-white/10 p-6 md:p-8 rounded-sm shadow-[0_0_50px_rgba(0,0,0,1)] relative z-10 overflow-y-auto max-h-[90vh] scrollbar-hide"
      >
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <div className="flex items-center gap-3">
            <Fingerprint className="text-neon-green" size={20} />
            <span className="system-label text-neon-green">Breach_Active</span>
          </div>
          <div className="system-label">Step 0{step + 1} / 03</div>
        </div>

        <div className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tighter uppercase">{steps[step].title}</h2>
          <p className="text-gray-500 text-[10px] md:text-xs font-mono">{steps[step].desc}</p>
        </div>

        <div className="space-y-4">
          {step === 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CHARACTER_VESSELS.map((vessel) => (
                <button 
                  key={vessel.id}
                  onClick={() => setSelectedVessel(vessel)}
                  className={cn(
                    "p-4 border text-left transition-all group",
                    selectedVessel?.id === vessel.id 
                      ? "border-neon-green bg-neon-green/5" 
                      : "border-white/5 bg-white/2 hover:border-white/20"
                  )}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <vessel.icon size={14} className={cn(selectedVessel?.id === vessel.id ? vessel.color : "text-gray-600")} />
                    <span className={cn("text-[9px] font-bold tracking-widest", selectedVessel?.id === vessel.id ? "text-white" : "text-gray-500")}>
                      {vessel.name}
                    </span>
                  </div>
                  <p className="text-[8px] text-gray-600 leading-tight">{vessel.desc}</p>
                </button>
              ))}
            </div>
          )}
          
          {step === 1 && (
            <div className="py-8 md:py-12 border border-white/5 bg-white/2 rounded-sm p-4 md:p-6 text-center">
              <p className="text-[10px] md:text-xs text-neon-amber mb-8 leading-relaxed font-mono">
                "THE IMPOSSIBILITY BEGINS WITH THE TRIAL ITSELF, AN ACCUSATION. WHO IS ACCUSED? THE READER IS JURY AND WITNESS."
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={next} className="flex-1 py-3 bg-neon-green/10 border border-neon-green text-neon-green rounded-sm font-bold text-[10px] tracking-widest hover:bg-neon-green/20 transition-all uppercase">Accept_Fate</button>
                <button className="flex-1 py-3 bg-white/5 border border-white/10 text-gray-500 rounded-sm font-bold text-[10px] tracking-widest hover:bg-white/10 transition-all uppercase">Resist_Nexus</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="py-8 md:py-12 flex flex-col items-center justify-center gap-8">
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 180, 270, 360],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 md:w-24 md:h-24 border border-neon-green/30 rounded-full flex items-center justify-center relative"
              >
                <div className="absolute inset-0 border-t border-neon-green rounded-full animate-spin" />
                <Crosshair className="text-neon-green" size={24} />
              </motion.div>
              <div className="text-[10px] text-neon-green animate-pulse font-mono">SYNCING_BIOMETRICS...</div>
            </div>
          )}

          {(step === 0 || step === 2) && (
            <button 
              onClick={next}
              disabled={step === 0 && !selectedVessel}
              className="w-full py-4 bg-white text-black rounded-sm font-bold text-[10px] tracking-[0.3em] hover:bg-neon-green hover:text-black transition-all disabled:opacity-20 disabled:cursor-not-allowed flex items-center justify-center gap-2 uppercase"
            >
              Execute_Sequence <ChevronRight size={14} />
            </button>
          )}
        </div>

        <div className="mt-8 md:mt-12 pt-6 border-t border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Activity size={12} className="text-neon-green" />
            <span className="system-label text-neon-green/60">Uptime: 99.99%</span>
          </div>
          <span className="system-label">Katcode_Nexus_0.1</span>
        </div>
      </motion.div>
    </div>
  );
};

const TerminalEnd = ({ isCompiling, onComplete }: { isCompiling: boolean, onComplete: () => void }) => {
  const { playBeep, playError } = useSound();
  const [logs, setLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isCompiling) {
      setLogs(["INITIALIZING_DOWNLOAD_SEQUENCE...", "CONNECTING_TO_NEXUS_GATEWAY..."]);
      let i = 0;
      const sequence = [
        "FETCHING_KATCODE_CORE_0.1...",
        "VERIFYING_INTEGRITY_HASH...",
        "UNPACKING_SUB_PROCESSES...",
        "COMPILING_NEXUS_FIRMWARE...",
        "ERROR: UNEXPECTED_TOKEN_IN_SILENCE_09",
        "RETRYING_COMPILATION...",
        "COMPILING_NEXUS_FIRMWARE (ATTEMPT 2)...",
        "CRITICAL_ERROR: COMPILATION_FAILED",
        "PATH: /usr/local/bin/katcode_nexus",
        "REASON: SOUL_SYNC_MISMATCH",
        "DOWNLOAD_ABORTED."
      ];

      const interval = setInterval(() => {
        if (i < sequence.length) {
          setLogs(prev => [...prev, sequence[i]]);
          if (sequence[i].includes('ERROR')) playError();
          else playBeep();
          i++;
        } else {
          clearInterval(interval);
          onComplete();
        }
      }, 800);
      return () => clearInterval(interval);
    }
  }, [isCompiling]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  if (!isCompiling && logs.length === 0) return null;

  return (
    <div className="mt-12 bg-black border border-neon-red/30 p-6 rounded-sm font-mono text-[10px] md:text-xs text-neon-red/60 h-64 flex flex-col relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-neon-red/20" />
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
        <div className="flex items-center gap-2">
          <TerminalIcon size={14} className="text-neon-red" />
          <span className="font-bold text-neon-red uppercase tracking-widest">Compiler_Output</span>
        </div>
        <div className="text-[8px] text-neon-red/40">Status: FAILED</div>
      </div>
      <div ref={scrollRef} className="flex-1 space-y-1 overflow-y-auto scrollbar-hide">
        {logs.map((log, i) => (
          <div key={i} className="flex gap-2">
            <span className="opacity-20">{new Date().toLocaleTimeString()}</span>
            <span className={cn(
              log.includes('ERROR') || log.includes('FAILED') || log.includes('ABORTED') ? 'text-neon-red font-bold' : ''
            )}>{log}</span>
          </div>
        ))}
        {isCompiling && logs.length < 11 && (
          <motion.div 
            animate={{ opacity: [0, 1] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
            className="w-2 h-4 bg-neon-red/40 inline-block"
          />
        )}
      </div>
    </div>
  );
};

export default function App() {
  const [entered, setEntered] = useState(false);
  const [selectedVessel, setSelectedVessel] = useState<any>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFocused, setIsFocused] = useState(true);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCrashed, setIsCrashed] = useState(false);
  const [isCompiling, setIsCompiling] = useState(false);
  const { playGlitch, playBeep, playError } = useSound();
  const { isRedacted, sessionActive, watermarkPos } = useSecurity(isCrashed);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(progress);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => container?.removeEventListener('scroll', handleScroll);
  }, [entered]);

  useEffect(() => {
    const triggerGlitch = () => {
      if (Math.random() > 0.97 && !isCrashed && !isRedacted) {
        setIsGlitching(true);
        playGlitch();
        setTimeout(() => setIsGlitching(false), 150);
      }
    };
    const interval = setInterval(triggerGlitch, 3000);
    return () => clearInterval(interval);
  }, [isCrashed, playGlitch, isRedacted]);

  const handleCommand = (cmd: string) => {
    const c = cmd.toLowerCase().trim();
    if (c === 'help') {
      // Custom terminal response logic
    } else if (c === 'decrypt') {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 800);
    } else if (c === 'exit') {
      setEntered(false);
    } else if (c === 'crash') {
      setIsCrashed(true);
      setTimeout(() => setIsCrashed(false), 5000);
    }
  };

  if (!sessionActive) {
    return (
      <div className="h-screen bg-black flex items-center justify-center p-8 text-center">
        <div className="max-w-md space-y-6">
          <Lock className="text-neon-red mx-auto" size={48} />
          <h2 className="text-2xl font-bold text-neon-red uppercase tracking-widest">Session_Expired</h2>
          <p className="text-gray-600 text-xs font-mono">
            THIS_PROTOCOL_IS_UNSENDABLE. 
            YOUR_TEMPORARY_ACCESS_TOKEN_HAS_BEEN_REVOKED.
            RE-AUTHENTICATION_REQUIRED.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "h-screen flex flex-col bg-[#050505] overflow-hidden font-mono selection:bg-neon-green selection:text-black transition-all duration-500",
      !isFocused && "window-blurred",
      isGlitching && "glitch-active",
      isCrashed && "system-crash",
      isRedacted && "blur-sm grayscale"
    )}>
      <div className="crt-overlay" />
      <div className="scanline" />

      {/* Moving Watermark (Unscreenable) */}
      <motion.div 
        animate={{ x: watermarkPos.x, y: watermarkPos.y }}
        transition={{ type: 'spring', damping: 20, stiffness: 50 }}
        className="fixed z-[1000] pointer-events-none opacity-[0.03] text-[8px] font-mono text-white whitespace-nowrap select-none"
      >
        {PUBLISHER_EMAIL} // {new Date().toISOString()} // NODE_882
      </motion.div>

      <AnimatePresence>
        {isRedacted && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[500] flex flex-col items-center justify-center p-8 text-center backdrop-blur-3xl"
          >
            <Shield className="text-neon-amber mb-6" size={64} />
            <h2 className="text-4xl font-black text-neon-amber mb-4 uppercase tracking-tighter">REDACTED</h2>
            <p className="text-neon-amber/60 font-mono text-sm max-w-md">
              NEXUS_SECURITY: VIEW_BLOCKED_DUE_TO_LOSS_OF_FOCUS. 
              SCREEN_CAPTURE_PREVENTION_ACTIVE.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!entered && <SystemGate onEnter={() => setEntered(true)} onSelectVessel={setSelectedVessel} />}
        {isCrashed && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-neon-red/20 z-[200] flex flex-col items-center justify-center p-8 text-center backdrop-blur-xl"
          >
            <AlertTriangle className="text-neon-red mb-6 animate-bounce" size={64} />
            <h2 className="text-4xl font-black text-neon-red mb-4 uppercase tracking-tighter">System_Failure</h2>
            <p className="text-neon-red/80 font-mono text-sm max-w-md mb-8">
              CRITICAL_ERROR: COMPILATION_FAILED_AT_RUNTIME. 
              MEMORY_LEAK_DETECTED_IN_NEXUS_CORE.
              REBOOTING_IN_5_SECONDS...
            </p>
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-full bg-neon-red"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="h-14 bg-black border-b border-white/5 flex items-center justify-between px-4 md:px-6 z-[60] shrink-0">
        <div className="flex items-center gap-3 md:gap-4">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden p-2 text-gray-500 hover:text-neon-green transition-colors"
          >
            {isSidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          <div className="w-7 h-7 md:w-8 md:h-8 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center">
            <Cpu className="text-neon-green" size={14} />
          </div>
          <div>
            <h1 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white truncate max-w-[120px] md:max-w-none">KATCODE_NEXUS</h1>
            <div className="system-label text-[6px] md:text-[7px] text-neon-amber">Protocol_0.1 // {selectedVessel?.name || 'GUEST'}</div>
          </div>
        </div>

        <div className="hidden xl:flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Database size={12} className="text-gray-600" />
            <span className="system-label">Ledger: Decentralized</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock size={12} className="text-gray-600" />
            <span className="system-label">Encryption: AES-256</span>
          </div>
          <div className="flex items-center gap-2">
            <Fingerprint size={12} className="text-gray-600" />
            <span className="system-label">Node: {Math.random().toString(16).substring(2, 8).toUpperCase()}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse shadow-[0_0_10px_rgba(0,255,65,0.5)]" />
          <span className="system-label text-neon-green text-[7px] md:text-[9px]">Stable</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/80 z-[50] backdrop-blur-sm"
            />
          )}
        </AnimatePresence>

        {/* Sidebar */}
        <aside className={cn(
          "fixed lg:relative lg:flex w-72 h-full border-r border-white/5 bg-black p-6 flex-col gap-8 overflow-y-auto z-[55] transition-transform duration-300 lg:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="space-y-4">
            <div className="system-label text-white flex items-center gap-2">
              <Activity size={10} /> Nexus_Metrics
            </div>
            <div className="grid grid-cols-1 gap-2">
              {[
                { label: "Stability", value: "99.8%", color: "text-neon-green" },
                { label: "Compliance", value: "94.2%", color: "text-neon-amber" },
                { label: "Entropy", value: "0.02%", color: "text-neon-red" },
              ].map((stat, i) => (
                <div key={i} className="p-3 bg-white/2 border border-white/5 rounded-sm">
                  <div className="system-label text-[7px] mb-1 opacity-50">{stat.label}</div>
                  <div className={cn("text-sm font-bold font-mono tracking-widest", stat.color)}>{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 min-h-[300px]">
             <TerminalLog onCommand={handleCommand} />
          </div>

          <div className="space-y-4">
            <div className="system-label text-white flex items-center gap-2">
              <Shield size={10} /> Active_Silences
            </div>
            <div className="space-y-1">
              {[
                "01: NEED", "02: GENDER", "03: CARE", "04: SHAPE", 
                "05: PHYSICS", "06: ENGINE", "07: SCALE", "08: SYSTEM", "09: BREAK"
              ].map((silence, i) => (
                <div key={i} className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-sm transition-colors cursor-help group">
                  <div className="w-1 h-1 bg-white/10 rounded-full group-hover:bg-neon-green transition-colors" />
                  <span className="text-[9px] font-mono text-gray-600 group-hover:text-neon-green">{silence}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-neon-red/5 border border-neon-red/20 rounded-sm flex items-start gap-3">
            <AlertTriangle className="text-neon-red shrink-0" size={14} />
            <div>
              <div className="text-[8px] font-bold text-neon-red uppercase mb-1">Warning</div>
              <p className="text-[8px] text-neon-red/60 leading-tight font-mono">
                9TH_SILENCE_INITIATED.
              </p>
            </div>
          </div>
        </aside>

        {/* Article Area */}
        <main className="flex-1 relative overflow-hidden bg-black">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-px bg-white/5 z-30">
            <motion.div 
              className="h-full bg-neon-green shadow-[0_0_10px_rgba(0,255,65,0.5)]"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          <div 
            ref={containerRef}
            className="h-full overflow-y-auto scrollbar-hide"
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 md:py-24">
              <div className="mb-16 md:mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="px-2 py-1 border border-neon-green text-neon-green text-[8px] font-mono font-bold rounded-sm uppercase tracking-[0.3em]">
                    DECRYPTED_PROTOCOL_0.1
                  </div>
                  <div className="h-px flex-1 bg-white/5" />
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-white mb-8 uppercase leading-tight">
                  Mein Protokoll 0.1:<br />
                  <span className="text-neon-green glitch-text" data-text="Katcode">Katcode</span>
                </h1>

                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Eye size={12} className="text-neon-green" />
                    <span className="system-label text-neon-green/60">Omniscient_View</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers size={12} />
                    <span className="system-label">Node_Primary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fingerprint size={12} />
                    <span className="system-label">Vessel: {selectedVessel?.name || 'UNKNOWN'}</span>
                  </div>
                </div>
              </div>

              <div className="protocol-content selection:bg-neon-green selection:text-black">
                <ReactMarkdown 
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    span: ({ node, ...props }) => {
                      if (props.className === 'corrupted') {
                        return <span {...props} className="corrupted" />;
                      }
                      return <span {...props} />;
                    }
                  }}
                >
                  {PROTOCOL_TEXT}
                </ReactMarkdown>
              </div>

              {/* Poem Section */}
              <div className="mt-24 mb-32 p-6 md:p-12 border border-neon-amber/20 bg-neon-amber/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-neon-amber/20" />
                <div className="flex items-center gap-3 mb-8">
                  <Info size={14} className="text-neon-amber" />
                  <span className="system-label text-neon-amber tracking-[0.3em]">Coda_Transmission</span>
                </div>
                <div className="font-mono text-xs md:text-sm text-neon-amber/90 leading-relaxed whitespace-pre-wrap italic">
                  {POEM_TEXT}
                </div>
                <div className="mt-12 flex justify-end">
                   <div className="system-label text-neon-amber/40">End_of_Stream</div>
                </div>
              </div>

              <div className="mt-32 pt-16 border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                  <div className="space-y-6">
                    <div className="system-label text-white tracking-[0.3em]">Node_Status</div>
                    <div className="p-6 md:p-8 bg-white/2 border border-white/5 rounded-sm space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest">Integrity</span>
                        <span className="text-[10px] font-bold text-neon-green tracking-widest">STABLE</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest">Soul_Sync</span>
                        <span className="text-[10px] font-bold text-neon-amber tracking-widest">94.2%</span>
                      </div>
                      <div className="w-full h-px bg-white/5 relative">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '94.2%' }}
                          className="h-full bg-neon-green shadow-[0_0_10px_rgba(0,255,65,0.5)]" 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="system-label text-white tracking-[0.3em]">Nexus_Directives</div>
                    <div className="flex flex-col gap-3">
                      <button 
                        onClick={() => setIsCompiling(true)}
                        disabled={isCompiling}
                        className="w-full py-4 px-6 bg-white text-black rounded-sm text-[10px] font-bold flex items-center justify-between hover:bg-neon-green transition-all uppercase tracking-[0.2em] disabled:opacity-50"
                      >
                        {isCompiling ? "Compiling..." : "Download_Software"} <Zap size={14} className={isCompiling ? "animate-pulse" : ""} />
                      </button>
                      <button className="w-full py-4 px-6 border border-white/10 text-gray-500 rounded-sm text-[10px] font-bold flex items-center justify-between hover:border-white hover:text-white transition-all uppercase tracking-[0.2em]">
                        Consult_Estimation <ChevronRight size={14} />
                      </button>
                    </div>
                    <TerminalEnd isCompiling={isCompiling} onComplete={() => {
                      setIsCompiling(false);
                      setIsCrashed(true);
                      setTimeout(() => setIsCrashed(false), 5000);
                    }} />
                  </div>
                </div>
              </div>

              <footer className="mt-48 pb-24 border-t border-white/5 pt-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="text-[9px] font-mono text-gray-600 tracking-[0.4em] uppercase text-center md:text-left">
                    © KATCODE_NEXUS // 1948-06-08 // ALL_SILENCES_RESERVED
                  </div>
                  <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    <span className="system-label hover:text-neon-green cursor-pointer transition-colors">Privacy_Void</span>
                    <span className="system-label hover:text-neon-green cursor-pointer transition-colors">Terms_of_Compliance</span>
                    <span className="system-label hover:text-neon-green cursor-pointer transition-colors">Exit_Node</span>
                  </div>
                </div>
                <div className="mt-12 text-center">
                  <p className="text-[8px] text-white/10 font-mono tracking-[0.5em] md:tracking-[1em] uppercase">
                    The fate we love is the fate we were compiled to want.
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
