import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from '../../../components/button';
import { useState } from "react";
import { type DateRange, DayPicker } from "react-day-picker";
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import 'react-day-picker/dist/style.css';


interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  closeGuestsInput: () => void
  openGuestsInput: () => void
  setDestination: (destination: string) => void
  eventStartAndEndDates: DateRange | undefined
  setEventStartAndEndDates: (dates: DateRange | undefined) => void
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  closeGuestsInput,
  openGuestsInput,
  setDestination,
  eventStartAndEndDates,
  setEventStartAndEndDates,
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  function openDatePicker() {
    return setIsDatePickerOpen(true)
  }

  function closeDatePicker() {
    return setIsDatePickerOpen(false)
  }

  let displayedDate = null;

  if (eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to) {
    const dayFrom = format(eventStartAndEndDates.from, "d")
    const monthFrom = format(eventStartAndEndDates.from, "LLL", { locale: ptBR })
    const yearFrom = format(eventStartAndEndDates.from, "yyyy")
    const dayTo = format(eventStartAndEndDates.to, "d")
    const monthTo = format(eventStartAndEndDates.to, "LLL", { locale: ptBR })
    const yearTo = format(eventStartAndEndDates.to, "yyyy")

    if (monthFrom === monthTo && yearFrom === yearTo)
      displayedDate = `${dayFrom} até ${dayTo} de ${monthTo} de ${yearTo}`;
    else if (monthFrom !== monthTo && yearFrom === yearTo)
      displayedDate = `${dayFrom} de ${monthFrom} até ${dayTo} de ${monthTo} de ${yearTo}`;
    else {
      //displayedDate = `${dayFrom}/${monthFrom}/${yearFrom} até ${dayTo}/${monthTo}/${yearTo}`;
      displayedDate = `${format(eventStartAndEndDates.from, "PPP")} até ${format(eventStartAndEndDates.to, "PPP")}`;
    }
  }
  

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className='flex items-center gap-2 flex-1'>
        <MapPin className="size-5 text-zinc-400" />
        <input 
          disabled={isGuestsInputOpen} 
          type="text" 
          placeholder="Para onde você vai?" 
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" 
          onChange={event => setDestination(event.target.value)}
        />
      </div>

      <button onClick={openDatePicker} disabled={isGuestsInputOpen} className='flex items-center gap-2 text-left w-[240px]'>
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 w-40 flex-1">
          {displayedDate || "Quando?"}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione a data</h2>
                <button type="button" onClick={closeDatePicker}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>

             <DayPicker mode="range" selected={eventStartAndEndDates} onSelect={setEventStartAndEndDates} />
          </div>
        </div>
      )}

      <div className='w-px h-6 bg-zinc-800' />

      {isGuestsInputOpen ? (
        <Button onClick={closeGuestsInput} variant="secondary">
          Alterar local/data
          <Settings2 className='size-5' />
        </Button>
      ) : (
        <Button onClick={openGuestsInput} variant="primary">
          Continuar
          <ArrowRight className='size-5' />
        </Button>
      )}

    </div>
  )
}