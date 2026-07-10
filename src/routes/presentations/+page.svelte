<script lang="ts">
  import Shell from '$lib/components/Shell.svelte';
  import { presentations, presentationsPdfPath } from '$lib/data/presentations';
</script>

<Shell>
  <h1>Video and Audio of Final Presentations</h1>
  <h4>Abundant Nexus Conference &middot; April 24, 2024 &middot; Computer History Museum, Mountain View, CA</h4>

  <p style="margin: 1rem 0;">
    Recordings of every talk from the conference. Click <strong>MP4</strong> to watch the video or
    <strong>MP3</strong> to listen to the audio (hosted on Google Drive).
  </p>

  <p style="margin: 1rem 0;">
    <a href={presentationsPdfPath} target="_blank" rel="noopener noreferrer">
      Download the printable PDF (Abundant_Nexus_Final_Videos_r5.pdf)
    </a>
  </p>

  <div class="presentations-table-wrapper">
    <table class="presentations-table" aria-label="Conference presentations with video and audio recordings">
      <caption class="sr-only"> Video and audio recordings of all Abundant Nexus Conference presentations. </caption>
      <thead>
        <tr>
          <th>Video</th>
          <th>Audio</th>
          <th>Duration</th>
          <th>Topic</th>
          <th>Speakers</th>
        </tr>
      </thead>
      <tbody>
        {#each presentations as p}
          <tr>
            <td>
              <a class="media-link mp4" href={p.videoUrl} target="_blank" rel="noopener noreferrer" aria-label="Watch video: {p.topic}">
                MP4
              </a>
            </td>
            <td>
              <a class="media-link mp3" href={p.audioUrl} target="_blank" rel="noopener noreferrer" aria-label="Listen to audio: {p.topic}">
                MP3
              </a>
            </td>
            <td class="duration">{p.duration}</td>
            <td class="topic">
              {#if p.isKeynote}<strong>Keynote:</strong>
              {/if}{p.topic}
            </td>
            <td>
              {#if p.speakers.length === 0}
                <span class="text-muted">&mdash;</span>
              {:else}
                <ul class="speaker-list">
                  {#each p.speakers as s}
                    <li>
                      {#if s.slug}
                        <a href="/speakers/{s.slug}"><strong>{s.name}</strong></a>
                      {:else}
                        <strong>{s.name}</strong>
                      {/if}
                      <span class="speaker-desc">{s.description}</span>
                    </li>
                  {/each}
                </ul>
              {/if}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</Shell>

<style>
  .presentations-table-wrapper {
    overflow-x: auto;
    margin: 1.5rem 0;
  }

  .presentations-table {
    width: 100%;
    border-collapse: collapse;
    background: var(--white);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
    border-radius: 6px;
    overflow: hidden;
  }

  .presentations-table thead {
    background: var(--primary);
    color: var(--white);
  }

  .presentations-table th,
  .presentations-table td {
    padding: 0.75rem 1rem;
    text-align: left;
    vertical-align: top;
    border-bottom: 1px solid #e5e7eb;
  }

  .presentations-table tbody tr:nth-child(even) {
    background: #fafafa;
  }

  .presentations-table tbody tr:hover {
    background: #f0f7fc;
  }

  .media-link {
    display: inline-block;
    padding: 0.35rem 0.75rem;
    border-radius: 4px;
    color: var(--white) !important;
    font-weight: 600;
    font-size: 0.85rem;
    text-decoration: none;
  }

  .media-link.mp4 {
    background: #d6336c;
  }

  .media-link.mp3 {
    background: var(--accent);
  }

  .media-link:hover {
    opacity: 0.85;
  }

  .duration {
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
    color: #555;
  }

  .topic {
    min-width: 200px;
  }

  .speaker-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .speaker-list li {
    padding: 0.15rem 0;
  }

  .speaker-desc {
    color: #555;
    margin-left: 0.35rem;
  }

  .text-muted {
    color: #999;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (max-width: 640px) {
    .presentations-table th,
    .presentations-table td {
      padding: 0.5rem;
      font-size: 0.9rem;
    }

    .media-link {
      padding: 0.3rem 0.55rem;
      font-size: 0.8rem;
    }
  }
</style>
