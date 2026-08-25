-- Review comments for /experiments/TraceQuoting. Run once in the Supabase SQL editor
-- (or through the Supabase MCP). RLS is on with no policies: only the service role,
-- i.e. the site's own route behind the password gate, can read or write.
create table if not exists public.tracequoting_comments (
  id            bigint generated always as identity primary key,
  layer         text,
  text          text not null check (length(text) between 1 and 2000),
  author        text,
  x             double precision,
  y             double precision,
  created       timestamptz not null default now(),
  done          boolean not null default false,
  completed     timestamptz,
  completed_by  text
);
alter table public.tracequoting_comments enable row level security;
