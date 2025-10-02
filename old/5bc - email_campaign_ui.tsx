import React, { useState } from 'react';
import { AlertCircle, Calendar, Send, Mail, Clock } from 'lucide-react';

export default function EmailCampaignBuilder() {
  const [subjectLine, setSubjectLine] = useState('');
  const [previewText, setPreviewText] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [useAsReply, setUseAsReply] = useState(true);
  
  const [sendOption, setSendOption] = useState('schedule');
  const [sendType, setSendType] = useState('fixed');
  const [sendDate, setSendDate] = useState('2025-10-01');
  const [sendTime, setSendTime] = useState('');
  const [timezone, setTimezone] = useState('recipient');

  const isGmail = senderEmail.includes('@gmail.com') || senderEmail.includes('@googlemail.com');

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Email Message Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="w-6 h-6" />
            <h1 className="text-2xl font-semibold">Email message</h1>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Subject line <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={subjectLine}
                  onChange={(e) => setSubjectLine(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter subject line"
                />
                <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50">
                  😊
                </button>
                <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50">
                  👥
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Preview text
              </label>
              <input
                type="text"
                value={previewText}
                onChange={(e) => setPreviewText(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter preview text"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Sender name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter sender name"
              />
            </div>

            {isGmail && (
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4 flex gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-900">
                  Sending from a personal email address (e.g. gmail.com) can cause inbox providers to flag your messages as spam.{' '}
                  <a href="#" className="text-blue-600 underline hover:text-blue-700">
                    Update your default sender email address to improve deliverability
                  </a>
                  .
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2">
                Sender email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="sender@example.com"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="replyTo"
                checked={useAsReply}
                onChange={(e) => setUseAsReply(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="replyTo" className="text-sm font-medium">
                Use as reply-to
              </label>
            </div>
          </div>
        </div>

        {/* Schedule or Send Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-6">Schedule or send campaign</h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => setSendOption('schedule')}
              className={`p-6 border-2 rounded-lg text-left transition-all ${
                sendOption === 'schedule'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <Calendar className="w-6 h-6" />
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  sendOption === 'schedule' ? 'border-blue-500' : 'border-gray-300'
                }`}>
                  {sendOption === 'schedule' && (
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                  )}
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-1">Schedule</h3>
              <p className="text-sm text-gray-600">Choose a future date and time to send</p>
            </button>

            <button
              onClick={() => setSendOption('now')}
              className={`p-6 border-2 rounded-lg text-left transition-all ${
                sendOption === 'now'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <Send className="w-6 h-6" />
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  sendOption === 'now' ? 'border-blue-500' : 'border-gray-300'
                }`}>
                  {sendOption === 'now' && (
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                  )}
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-1">Send now</h3>
              <p className="text-sm text-gray-600">Start sending your campaign immediately</p>
            </button>
          </div>

          {sendOption === 'schedule' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={sendType}
                  onChange={(e) => setSendType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="fixed">Fixed send time</option>
                  <option value="optimal">Optimal send time</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={sendDate}
                    onChange={(e) => setSendDate(e.target.value)}
                    className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Calendar className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Time</label>
                <div className="relative">
                  <input
                    type="time"
                    value={sendTime}
                    onChange={(e) => setSendTime(e.target.value)}
                    className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Clock className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Time Zone</label>
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="recipient">Recipient's Local Time Zone</option>
                  <option value="utc">UTC</option>
                  <option value="london">Europe/London</option>
                  <option value="newyork">America/New_York</option>
                </select>
              </div>
            </div>
          )}

          <div className="flex gap-3 mt-6">
            <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 font-medium">
              Cancel
            </button>
            <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 font-medium">
              {sendOption === 'schedule' ? 'Schedule campaign' : 'Send campaign'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}