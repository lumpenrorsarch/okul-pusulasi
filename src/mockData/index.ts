import type { Announcement, School, ScheduleItem, Student, User } from '@/types';

export const accounts: User[] = [
  { id: 'u1', name: 'Ahmet Yılmaz', email: 'super@test.com', role: 'superadmin', title: 'Süper Yönetici', initials: 'AY' },
  { id: 'u2', name: 'Mehmet Demir', email: 'mudur@test.com', role: 'admin', title: 'Okul Müdürü', school: 'Nilüfer Anadolu Lisesi', initials: 'MD' },
  { id: 'u3', name: 'Ayşe Yılmaz', email: 'ogretmen@test.com', role: 'teacher', title: 'Matematik Öğretmeni', school: 'Nilüfer Anadolu Lisesi', initials: 'AY' },
  { id: 'u4', name: 'Fatma Yılmaz', email: 'veli@test.com', role: 'parent', title: 'Veli', school: 'Nilüfer Anadolu Lisesi', initials: 'FY' },
];

export const schools: School[] = [
  { id: 's1', name: 'Atatürk İlkokulu', city: 'Ankara', students: 840, classes: 34, teachers: 52, parents: 420, status: 'Aktif', principal: 'Selin Kaya', plan: 'Kurumsal' },
  { id: 's2', name: 'Nilüfer Anadolu Lisesi', city: 'İstanbul', students: 1240, classes: 42, teachers: 68, parents: 1050, status: 'Aktif', principal: 'Mehmet Demir', plan: 'Kurumsal' },
  { id: 's3', name: 'Mehmet Akif Ortaokulu', city: 'İzmir', students: 620, classes: 28, teachers: 41, parents: 540, status: 'Aktif', principal: 'Bora Arslan', plan: 'Standart' },
  { id: 's4', name: 'Gazi Fen Lisesi', city: 'Bursa', students: 980, classes: 36, teachers: 57, parents: 810, status: 'Aktif', principal: 'Derya Çetin', plan: 'Kurumsal' },
  { id: 's5', name: 'Yunus Emre İlkokulu', city: 'Eskişehir', students: 310, classes: 18, teachers: 26, parents: 280, status: 'Deneme', principal: 'Aylin Koç', plan: 'Deneme' },
];

export const students: Student[] = [
  { id: 'st1', name: 'Ahmet Yılmaz', className: '9A', parent: 'Fatma Yılmaz', attendance: 'present', avatar: 'AY' },
  { id: 'st2', name: 'Zeynep Demir', className: '9A', parent: 'Okan Demir', attendance: 'absent', avatar: 'ZD' },
  { id: 'st3', name: 'Mehmet Kaya', className: '10B', parent: 'Ayşe Kaya', attendance: 'present', avatar: 'MK' },
  { id: 'st4', name: 'Elif Arslan', className: '10A', parent: 'Murat Arslan', attendance: 'late', avatar: 'EA' },
  { id: 'st5', name: 'Ali Can', className: '12A', parent: 'Nermin Can', attendance: 'present', avatar: 'AC' },
  { id: 'st6', name: 'Selin Arslan', className: '10B', parent: 'Banu Arslan', attendance: 'present', avatar: 'SA' },
];

export const announcements: Announcement[] = [
  { id: 'a1', title: 'Veli Toplantısı', audience: 'Tüm Veliler', date: '16 Eylül 2026', color: 'emerald' },
  { id: 'a2', title: 'Sınav Tarihleri', audience: 'Her Kesi', date: '14 Eylül 2026', color: 'amber' },
  { id: 'a3', title: 'Öğretmenler Kurulu', audience: 'Öğretmenler', date: '12 Eylül 2026', color: 'blue' },
];

export const schedule: ScheduleItem[] = [
  { time: '08:00', subject: 'Matematik', teacher: 'Ayşe Yılmaz', color: 'emerald' },
  { time: '09:00', subject: 'Fizik', teacher: 'Mehmet Kaya', color: 'blue' },
  { time: '10:00', subject: 'Türkçe', teacher: 'Selin Arslan', color: 'amber' },
  { time: '11:00', subject: 'Kimya', teacher: 'Bora Çetin', color: 'rose' },
];

export const homework = [
  { id: 'h1', title: 'Denklemler ve Eşitsizlikler', subject: 'Matematik', due: '18 Eylül', done: 18, total: 24, status: 'Aktif' },
  { id: 'h2', title: 'Kuvvet ve Hareket', subject: 'Fizik', due: '20 Eylül', done: 12, total: 24, status: 'Aktif' },
  { id: 'h3', title: 'Paragraf Çalışması', subject: 'Türkçe', due: '22 Eylül', done: 24, total: 24, status: 'Tamamlandı' },
];
