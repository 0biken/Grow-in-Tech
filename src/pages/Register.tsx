import React, { useEffect, useMemo, useState } from "react";

const CATEGORIES = [
  "AgriTech", "HealthTech", "EdTech", "FinTech", "CleanTech/Energy",
  "E-Commerce/Retail Tech", "Transportation/Logistics", "Smart Cities/Infrastructure",
  "Environmental Solutions", "Social Innovation", "Other"
];

const SDG_OPTIONS = [
  { v: '1', l: 'No Poverty' }, { v: '2', l: 'Zero Hunger' }, { v: '3', l: 'Good Health and Well-being' },
  { v: '4', l: 'Quality Education' }, { v: '5', l: 'Gender Equality' }, { v: '6', l: 'Clean Water and Sanitation' },
  { v: '7', l: 'Affordable and Clean Energy' }, { v: '8', l: 'Decent Work and Economic Growth' },
  { v: '9', l: 'Industry, Innovation and Infrastructure' }, { v: '10', l: 'Reduced Inequalities' },
  { v: '11', l: 'Sustainable Cities and Communities' }, { v: '12', l: 'Responsible Consumption and Production' },
  { v: '13', l: 'Climate Action' }, { v: '14', l: 'Life Below Water' }, { v: '15', l: 'Life on Land' },
  { v: '16', l: 'Peace, Justice and Strong Institutions' }, { v: '17', l: 'Partnerships for the Goals' }
];

const STAGES = [
  'Idea/Concept Stage', 'Prototype Development', 'MVP (Minimum Viable Product)',
  'Market Testing', 'Early Revenue/Scaling'
];

const DEFAULT_MEMBER = { name: '', email: '', phone: '', role: '', department: '', level: '' };
const STORAGE_KEY = 'git_registration_draft_v1';

/* ---- shared field primitives -------------------------------------------- */

const inputClass =
  "w-full rounded-xl border border-git-border bg-git-surface px-4 py-3 font-sans text-base text-git-title " +
  "placeholder:text-git-muted transition-colors duration-150 hover:border-git-border-hover " +
  "focus:border-git-accent focus:ring-1 focus:ring-git-accent focus:outline-none";

const Label = ({ children }: { children: React.ReactNode }) => (
  <span className="mb-1.5 block font-sans text-sm font-medium text-git-body">
    {children}
  </span>
);

const Hint = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-1.5 font-sans text-sm text-git-muted">{children}</p>
);

const FieldError = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-1.5 font-sans text-sm font-medium text-red-500">{children}</p>
);

export default function Register() {
  const [teamName, setTeamName] = useState('');
  const [innovationTitle, setInnovationTitle] = useState('');
  const [category, setCategory] = useState('');
  const [sdgs, setSdgs] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState('');
  const [impact, setImpact] = useState('');
  const [stage, setStage] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [documentUrl, setDocumentUrl] = useState('');
  const [members, setMembers] = useState<any[]>([{ ...DEFAULT_MEMBER }, { ...DEFAULT_MEMBER }, { ...DEFAULT_MEMBER }]);
  const [pitchFile, setPitchFile] = useState<File | null>(null);
  const [docFile, setDocFile] = useState<File | null>(null);
  const [terms, setTerms] = useState({ accurate: false, enrolled: false, rules: false, truthful: false });

  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [registrationId, setRegistrationId] = useState<string | null>(null);

  useEffect(() => {
    try {
      const draft = localStorage.getItem(STORAGE_KEY);
      if (draft) {
        const d = JSON.parse(draft);
        setTeamName(d.teamName || '');
        setInnovationTitle(d.innovationTitle || '');
        setCategory(d.category || '');
        setSdgs(d.sdgs || []);
        setDescription(d.description || '');
        setProblem(d.problem || '');
        setSolution(d.solution || '');
        setImpact(d.impact || '');
        setStage(d.stage || '');
        setVideoUrl(d.videoUrl || '');
        setDocumentUrl(d.documentUrl || '');
        setMembers(d.members && d.members.length ? d.members : [{...DEFAULT_MEMBER},{...DEFAULT_MEMBER},{...DEFAULT_MEMBER}]);
        setTerms(d.terms || {accurate:false,enrolled:false,rules:false,truthful:false});
      }
    } catch {
      // ignore malformed drafts
    }
  }, []);

  useEffect(() => {
    const draft = { teamName, innovationTitle, category, sdgs, description, problem, solution, impact, stage, videoUrl, documentUrl, members, terms };
    const t = setTimeout(() => {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(draft)); } catch { /* quota */ }
    }, 700);
    return () => clearTimeout(t);
  }, [teamName, innovationTitle, category, sdgs, description, problem, solution, impact, stage, videoUrl, documentUrl, members, terms]);

  const wordCount = useMemo(() => description.split(/\s+/).filter(Boolean).length, [description]);
  const handleDescriptionChange = (txt: string) => {
    const words = txt.split(/\s+/).filter(Boolean);
    if (words.length <= 200) setDescription(txt);
    else setDescription(words.slice(0,200).join(' '));
  };
  const toggleSdg = (v: string) => setSdgs(prev => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]);
  const addMember = () => { if (members.length < 5) setMembers(prev => [...prev, {...DEFAULT_MEMBER}]); };
  const removeMember = (i: number) => { if (members.length > 3) setMembers(prev => prev.filter((_, idx) => idx !== i)); };
  const updateMember = (i: number, f: string, val: string) => setMembers(prev => prev.map((m, idx) => idx === i ? {...m, [f]: val} : m));
  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const isValidPhone = (p: string) => {
    const s = String(p || '').replace(/\s+/g,'');
    return /^(\+234|234)?[0-9]{10}$/.test(s) || /^0[0-9]{10}$/.test(s);
  };
  const hasDuplicateEmails = () => {
    const list = members.map(m => (m.email||'').trim().toLowerCase()).filter(Boolean);
    return new Set(list).size !== list.length;
  };
  const allTermsChecked = Object.values(terms).every(Boolean);
  const baseValidity = () => {
    if (!teamName.trim() || !innovationTitle.trim() || !category || sdgs.length===0) return false;
    if (!description.trim() || !problem.trim() || !solution.trim() || !impact.trim() || !stage) return false;
    if (members.length < 3 || members.length > 5) return false;
    if (hasDuplicateEmails()) return false;
    for (const m of members) {
      if (!m.name.trim() || !m.email.trim() || !m.phone.trim() || !m.role.trim() || !m.department.trim() || !m.level) return false;
      if (!isValidEmail(m.email) || !isValidPhone(m.phone)) return false;
    }
    if (!allTermsChecked) return false;
    return true;
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setSubmitError(null);
    if (!baseValidity()) { setSubmitError('Please complete all required fields correctly.'); return; }
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append('teamName', teamName.trim());
      fd.append('innovationTitle', innovationTitle.trim());
      fd.append('category', category);
      fd.append('sdgs', JSON.stringify(sdgs));
      fd.append('description', description.trim());
      fd.append('problem', problem.trim());
      fd.append('solution', solution.trim());
      fd.append('impact', impact.trim());
      fd.append('stage', stage);
      fd.append('videoUrl', videoUrl.trim());
      fd.append('documentUrl', documentUrl.trim());
      fd.append('members', JSON.stringify(members));
      if (pitchFile) fd.append('pitchFile', pitchFile);
      if (docFile) fd.append('docFile', docFile);

      // Endpoint unchanged as per requirements
      const res = await fetch('/api/innotech/register', { method: 'POST', body: fd });
      if (!res.ok) {
        const payload = await res.json().catch(()=>null);
        throw new Error(payload?.message || `Submission failed (${res.status})`);
      }
      const data = await res.json().catch(()=>({}));
      setSubmitted(true);
      setRegistrationId(data.registrationId || 'GiT-XXXX');
      localStorage.removeItem(STORAGE_KEY);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      setSubmitError(err.message || 'Submission failed');
    } finally { setLoading(false); }
  };

  const steps = [
    { key: 'team', title: 'Team' },
    { key: 'innovation', title: 'Innovation' },
    { key: 'members', title: 'Members' },
    { key: 'files', title: 'Files' },
    { key: 'terms', title: 'Terms' },
    { key: 'review', title: 'Review' }
  ];

  const stepValid = (idx: number) => {
    switch(idx) {
      case 0: return Boolean(teamName.trim());
      case 1: return Boolean(innovationTitle.trim() && category && sdgs.length>0 && wordCount>0);
      case 2:
        return members.length>=3 && members.every((m: any) => m.name && m.email && m.phone && m.role && m.department && m.level && isValidEmail(m.email) && isValidPhone(m.phone)) && !hasDuplicateEmails();
      case 3: return true;
      case 4: return allTermsChecked;
      case 5: return baseValidity();
      default: return false;
    }
  };

  if (submitted) {
    return (
      <div className="container-page max-w-2xl py-20 text-center bg-git-base">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-git-accent text-2xl font-bold text-white shadow-lg">
          ✓
        </div>
        <h1 className="mt-6 text-[length:var(--text-h2)] font-heading font-extrabold text-git-title">
          Registration Received
        </h1>
        <p className="mt-3 font-sans text-git-body">
          Thank you — your team has been registered for Grow In Tech (GiT).
        </p>
        <div className="mt-8 glass-card p-8">
          <p className="font-heading text-3xl font-extrabold text-git-title">{registrationId}</p>
          <p className="mt-1 font-sans text-sm uppercase tracking-widest text-git-muted">
            Registration ID
          </p>
          <p className="mt-5 font-sans text-sm text-git-muted">
            A confirmation email will be sent to your team lead.
          </p>
        </div>
        <button
          type="button"
          className="btn-primary mt-8"
          onClick={() => window.location.reload()}
        >
          Register Another Team
        </button>
      </div>
    );
  }

  return (
    <div className="container-page max-w-3xl py-12 sm:py-16 bg-git-base">
      <p className="section-eyebrow">
        GROW IN TECH (GiT)
      </p>
      <h1 className="mt-4 section-heading text-git-title">
        Register your team
      </h1>
      <p className="mt-4 max-w-xl font-sans leading-relaxed text-git-body">
        Six short steps. Progress saves automatically. Teams must have 3–5
        members, all currently enrolled University of Ibadan students.
      </p>

      <form onSubmit={handleSubmit} className="mt-10">
        {/* Stepper */}
        <ol className="flex gap-2 overflow-x-auto pb-4 custom-scrollbar">
          {steps.map((s, idx) => (
            <li
              key={s.key}
              aria-current={idx === currentStep ? 'step' : undefined}
              className={`flex shrink-0 items-center gap-2.5 rounded-full px-4 py-2.5 font-sans text-sm font-medium transition-colors duration-200 border ${
                idx === currentStep
                  ? 'bg-git-accent text-white border-git-accent'
                  : idx < currentStep
                  ? 'bg-git-surface text-git-title border-git-accent/30'
                  : 'bg-git-surface-2 text-git-muted border-transparent'
              }`}
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                  idx === currentStep
                    ? 'bg-white/20'
                    : idx < currentStep
                    ? 'bg-git-accent/10 text-git-accent'
                    : 'bg-git-border text-git-muted'
                }`}
              >
                {idx < currentStep ? '✓' : idx + 1}
              </span>
              <span>{s.title}</span>
            </li>
          ))}
        </ol>

        <div className="mt-6 glass-card p-6 sm:p-10">
          {currentStep === 0 && (
            <div className="flex flex-col gap-6">
              <label className="block">
                <Label>Team Name *</Label>
                <input value={teamName} onChange={e=>setTeamName(e.target.value)} placeholder="e.g., Team Infinity" className={inputClass} />
              </label>
              <label className="block">
                <Label>Team Lead Email *</Label>
                <input value={members[0]?.email||''} onChange={e=>updateMember(0,'email',e.target.value)} placeholder="lead@university.edu" className={inputClass} />
                <Hint>This address receives confirmations and next steps.</Hint>
              </label>
            </div>
          )}

          {currentStep === 1 && (
            <div className="flex flex-col gap-6">
              <label className="block">
                <Label>Innovation / Project Title *</Label>
                <input value={innovationTitle} onChange={e=>setInnovationTitle(e.target.value)} className={inputClass} placeholder="Short, clear title" />
              </label>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <Label>Category *</Label>
                  <select value={category} onChange={e=>setCategory(e.target.value)} className={inputClass}>
                    <option value="">Select a category</option>
                    {CATEGORIES.map(c=> <option key={c} value={c}>{c}</option>)}
                  </select>
                </label>
                <label className="block">
                  <Label>Stage *</Label>
                  <select value={stage} onChange={e=>setStage(e.target.value)} className={inputClass}>
                    <option value="">Select stage</option>
                    {STAGES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </label>
              </div>
              <fieldset>
                <legend className="mb-2 font-sans text-sm font-medium text-git-body">
                  UN SDGs (select at least 1) *
                </legend>
                <div className="grid max-h-56 gap-2 overflow-auto rounded-xl border border-git-border bg-git-surface p-3 sm:grid-cols-2">
                  {SDG_OPTIONS.map(o => (
                    <label key={o.v} className="flex cursor-pointer items-center gap-3 rounded-lg p-2 font-sans text-sm text-git-title transition-colors duration-150 hover:bg-git-surface-2">
                      <input type="checkbox" checked={sdgs.includes(o.v)} onChange={()=>toggleSdg(o.v)} className="h-4 w-4 shrink-0 accent-git-accent rounded border-gray-300 text-git-accent focus:ring-git-accent" />
                      <span>SDG {o.v}: {o.l}</span>
                    </label>
                  ))}
                </div>
                {!sdgs.length && <FieldError>Select at least one SDG</FieldError>}
              </fieldset>
              <label className="block">
                <Label>Brief Description (max 200 words) *</Label>
                <textarea value={description} onChange={e=>handleDescriptionChange(e.target.value)} rows={4} className={inputClass} />
                <div className="flex justify-between">
                  <Hint>{wordCount} / 200 words</Hint>
                  {wordCount>=200 && <FieldError>Maximum reached</FieldError>}
                </div>
              </label>
              <label className="block">
                <Label>Problem Statement *</Label>
                <textarea value={problem} onChange={e=>setProblem(e.target.value)} rows={3} className={inputClass} />
              </label>
              <label className="block">
                <Label>Your Solution *</Label>
                <textarea value={solution} onChange={e=>setSolution(e.target.value)} rows={3} className={inputClass} />
              </label>
              <label className="block">
                <Label>Expected Impact *</Label>
                <textarea value={impact} onChange={e=>setImpact(e.target.value)} rows={2} className={inputClass} />
              </label>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <div className="mb-6 flex items-center justify-between gap-4 border-b border-git-border pb-4">
                <h2 className="text-[length:var(--text-h3)] font-heading font-bold text-git-title">
                  Team Members ({members.length}/5)
                </h2>
                {members.length < 5 && (
                  <button type="button" className="btn-ghost py-2 px-4 text-sm" onClick={addMember}>
                    + Add member
                  </button>
                )}
              </div>
              <div className="flex flex-col gap-6">
                {members.map((m, idx) => (
                  <fieldset key={idx} className="rounded-2xl border border-git-border bg-git-surface-2 p-6 relative">
                    <legend className="flex items-center justify-between w-full px-1 font-sans text-sm font-bold text-git-title mb-4">
                      <span>Member {idx+1} {idx === 0 && "(Team Lead)"}</span>
                      {members.length > 3 && idx > 0 && (
                        <button type="button" className="font-medium text-red-500 hover:text-red-600 transition-colors" onClick={()=>removeMember(idx)}>
                          Remove
                        </button>
                      )}
                    </legend>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block">
                        <Label>Full Name *</Label>
                        <input value={m.name} onChange={e=>updateMember(idx,'name',e.target.value)} className={inputClass}/>
                      </label>
                      <label className="block">
                        <Label>Email *</Label>
                        <input value={m.email} onChange={e=>updateMember(idx,'email',e.target.value)} className={inputClass}/>
                        {m.email && !isValidEmail(m.email) && <FieldError>Invalid email</FieldError>}
                      </label>
                      <label className="block">
                        <Label>Phone *</Label>
                        <input value={m.phone} onChange={e=>updateMember(idx,'phone',e.target.value)} className={inputClass} placeholder="+234..." />
                        {m.phone && !isValidPhone(m.phone) && <FieldError>Use +234 or 0 format</FieldError>}
                      </label>
                      <label className="block">
                        <Label>Role *</Label>
                        <input value={m.role} onChange={e=>updateMember(idx,'role',e.target.value)} className={inputClass} placeholder="Developer, Designer..." />
                      </label>
                      <label className="block">
                        <Label>Department *</Label>
                        <input value={m.department} onChange={e=>updateMember(idx,'department',e.target.value)} className={inputClass} />
                      </label>
                      <label className="block">
                        <Label>Level *</Label>
                        <select value={m.level} onChange={e=>updateMember(idx,'level',e.target.value)} className={inputClass}>
                          <option value="">Select</option>
                          <option>100L</option><option>200L</option><option>300L</option><option>400L</option><option>500L</option><option>600L</option><option>PG</option>
                        </select>
                      </label>
                    </div>
                  </fieldset>
                ))}
              </div>
              {hasDuplicateEmails() && <FieldError>Two or more members have the same email — please use unique emails.</FieldError>}
            </div>
          )}

          {currentStep === 3 && (
            <div className="flex flex-col gap-6">
              <label className="block">
                <Label>Demo Video Link</Label>
                <input value={videoUrl} onChange={e=>setVideoUrl(e.target.value)} className={inputClass} placeholder="https://youtube.com/..." />
                <Hint>Share a YouTube or Drive link instead of uploading a large file.</Hint>
              </label>
              <label className="block">
                <Label>Supporting Document Link</Label>
                <input value={documentUrl} onChange={e=>setDocumentUrl(e.target.value)} className={inputClass} placeholder="https://drive.google.com/..." />
              </label>
              <div className="border-t border-git-border my-2 pt-6">
                <label className="block mb-6">
                  <Label>Pitch Deck (PDF/PPT, max 10MB)</Label>
                  <input type="file" accept=".pdf,.ppt,.pptx,.doc,.docx" onChange={e=>setPitchFile(e.target.files?.[0]||null)} className="w-full font-sans text-sm text-git-body file:mr-4 file:rounded-full file:border-0 file:bg-git-surface-2 file:px-5 file:py-2.5 file:font-sans file:text-sm file:font-medium file:text-git-title hover:file:bg-git-border transition-colors cursor-pointer" />
                  {pitchFile && <Hint>Selected: {pitchFile.name} • {Math.round(pitchFile.size/1024)} KB</Hint>}
                </label>
                <label className="block">
                  <Label>Additional Document (optional)</Label>
                  <input type="file" accept=".pdf,.doc,.docx,.zip" onChange={e=>setDocFile(e.target.files?.[0]||null)} className="w-full font-sans text-sm text-git-body file:mr-4 file:rounded-full file:border-0 file:bg-git-surface-2 file:px-5 file:py-2.5 file:font-sans file:text-sm file:font-medium file:text-git-title hover:file:bg-git-border transition-colors cursor-pointer" />
                  {docFile && <Hint>Selected: {docFile.name}</Hint>}
                </label>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <div className="rounded-2xl bg-git-accent-soft/30 p-6 mb-6">
                <h2 className="font-sans text-sm font-bold uppercase tracking-widest text-git-title mb-3">
                  Important Requirements
                </h2>
                <ul className="list-disc space-y-2 pl-5 font-sans text-sm text-git-body">
                  <li>Teams must have 3–5 members.</li>
                  <li>Solutions should be STEM-related and align with at least one UN SDG.</li>
                  <li>All team members must be current University of Ibadan students.</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                {([
                  ['accurate', 'I confirm that all information provided is accurate and truthful'],
                  ['enrolled', 'All team members are currently enrolled students at the University of Ibadan'],
                  ['rules', 'We agree to abide by the Grow In Tech (GiT) rules and regulations'],
                  ['truthful', 'We understand that incomplete or false information may lead to disqualification'],
                ] as const).map(([key, text]) => (
                  <label key={key} className="flex cursor-pointer items-start gap-4 rounded-xl border border-git-border bg-git-surface p-4 font-sans text-sm text-git-title transition-colors hover:border-git-border-hover">
                    <input
                      type="checkbox"
                      checked={terms[key]}
                      onChange={e=>setTerms(t=>({...t, [key]: e.target.checked}))}
                      className="mt-0.5 h-4 w-4 shrink-0 accent-git-accent rounded border-gray-300 text-git-accent focus:ring-git-accent"
                    />
                    <span>{text}</span>
                  </label>
                ))}
              </div>
              {!allTermsChecked && <FieldError>You must accept all terms to continue.</FieldError>}
            </div>
          )}

          {currentStep === 5 && (
            <div className="flex flex-col gap-6">
              <section className="rounded-2xl border border-git-border bg-git-surface-2 p-6">
                <h2 className="text-[length:var(--text-h3)] font-heading font-bold text-git-title mb-4 border-b border-git-border pb-2">Summary</h2>
                <dl className="grid gap-3 font-sans text-sm">
                  {[
                    ['Team', teamName],
                    ['Title', innovationTitle],
                    ['Category', category],
                    ['Stage', stage],
                    ['SDGs', sdgs.join(', ')],
                  ].map(([k, v]) => (
                    <div key={k} className="flex flex-col sm:flex-row sm:gap-4">
                      <dt className="font-medium text-git-body sm:w-32">{k}:</dt>
                      <dd className="font-medium text-git-title">{v || '—'}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 pt-4 border-t border-git-border">
                  <p className="font-sans text-sm font-medium text-git-body mb-2">Description</p>
                  <p className="font-sans text-sm leading-relaxed text-git-title">{description || '—'}</p>
                </div>
              </section>

              <section className="rounded-2xl border border-git-border bg-git-surface-2 p-6">
                <h2 className="text-[length:var(--text-h3)] font-heading font-bold text-git-title mb-4 border-b border-git-border pb-2">Members</h2>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {members.map((m, idx) => (
                    <li key={idx} className="font-sans text-sm bg-git-surface p-4 rounded-xl border border-git-border">
                      <p className="font-semibold text-git-title mb-1">
                        {m.name || `Member ${idx+1}`}{' '}
                        <span className="font-normal text-git-body block sm:inline">({m.role}, {m.level})</span>
                      </p>
                      <p className="text-git-muted">{m.email}</p>
                      <p className="text-git-muted">{m.phone}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl border border-git-border bg-git-surface-2 p-6">
                <h2 className="text-[length:var(--text-h3)] font-heading font-bold text-git-title mb-4 border-b border-git-border pb-2">Files &amp; Links</h2>
                <dl className="grid gap-3 font-sans text-sm">
                  {[
                    ['Video', videoUrl],
                    ['Doc link', documentUrl],
                    ['Pitch file', pitchFile?.name],
                    ['Additional file', docFile?.name],
                  ].map(([k, v]) => (
                    <div key={k} className="flex flex-col sm:flex-row sm:gap-4">
                      <dt className="font-medium text-git-body sm:w-32">{k}:</dt>
                      <dd className="break-all text-git-title">{v || '—'}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              {!baseValidity() && <FieldError>There are validation errors; please go back and fix them before submitting.</FieldError>}
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => setCurrentStep(s => Math.max(0, s-1))}
            disabled={currentStep===0}
            className="btn-ghost disabled:opacity-50 disabled:cursor-not-allowed"
          >
            &larr; Back
          </button>

          <div className="flex flex-col gap-3 sm:flex-row w-full sm:w-auto">
            {currentStep < steps.length - 1 && (
              <button
                type="button"
                onClick={() => {
                  if (!stepValid(currentStep)) { setSubmitError('Please complete required fields in this step before continuing.'); return; }
                  setSubmitError(null);
                  setCurrentStep(s => Math.min(steps.length-1, s+1));
                }}
                className="btn-primary w-full sm:w-auto"
              >
                Next Step &rarr;
              </button>
            )}
            <button
              type="submit"
              disabled={!baseValidity() || loading || currentStep !== steps.length - 1}
              className={`btn-primary w-full sm:w-auto ${currentStep !== steps.length - 1 ? 'hidden sm:block opacity-0 pointer-events-none' : ''} disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {loading ? 'Submitting…' : 'Submit Registration'}
            </button>
          </div>
        </div>

        {submitError && (
          <p role="alert" className="mt-6 rounded-xl border border-red-500/30 bg-red-50 p-4 font-sans text-sm font-medium text-red-600">
            {submitError}
          </p>
        )}
      </form>

      <div className="mt-12 pt-8 border-t border-git-border text-center">
        <p className="font-sans text-sm text-git-muted">
          Need help? Contact{' '}
          <a href="mailto:git.kommunity@gmail.com" className="font-medium text-git-accent hover:text-git-accent-hover transition-colors">
            git.kommunity@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
